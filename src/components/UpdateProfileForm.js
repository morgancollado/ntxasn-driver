import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'
import {updateProfileForm,  setProfileForm} from '../actions/updateProfileActions'
import { update } from '../actions/currentUserActions'
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        NTXASN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UpdateProfileForm =({updateFormData, updateProfileForm, update, history, currentUser, setProfileForm })=>  {
  const useUpdateProfileForm = () => {
    useEffect(()=> {
      setProfileForm(currentUser.attributes)
    }, [])
  }

  useUpdateProfileForm()
  const classes = useStyles();

  const handleChange = event => {
    
    const {name, value } = event.target
    const updatedFormInfo = {
        ...updateFormData,
            [name]: value     
        }
    updateProfileForm(updatedFormInfo)
}

const handleBoolean = event => {
  const {name, checked } = event.target
  const updatedFormInfo = {
    ...updateFormData,
        [name]: checked
    }
    updateProfileForm(updatedFormInfo)
}

const handleSubmit = event =>{
    event.preventDefault()
    update(updateFormData, history)

}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EditIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update your Driver Profile
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={handleChange}
                value={updateFormData.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={updateFormData.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone_number"
                label="Phone Number"
                name="phone_number"
                autoComplete="phone number"
                onChange={handleChange}
                type="tel"
                value={updateFormData.phone_number} 
              />
            </Grid>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select Available Days</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={updateFormData.monday} onChange={handleBoolean} name="monday" />}
                label="Monday"
              />
              <FormControlLabel
                control={<Checkbox checked={updateFormData.tuesday} onChange={handleBoolean} name="tuesday" />}
                label="Tuesday"
              />
              <FormControlLabel
                control={<Checkbox checked={updateFormData.wednesday} onChange={handleBoolean} name="wednesday" />}
                label="Wednesday"
              />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">-</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={updateFormData.thursday} onChange={handleBoolean} name="thursday" />}
                label="Thursday"
              />
              <FormControlLabel
                control={<Checkbox checked={updateFormData.friday} onChange={handleBoolean} name="friday" />}
                label="Friday"
              />
              <FormControlLabel
                control={<Checkbox checked={updateFormData.saturday} onChange={handleBoolean} name="saturday" />}
                label="Saturday"
              />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">-</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={updateFormData.sunday} onChange={handleBoolean} name="sunday" />}
                label="Sunday"
              />
          </FormGroup>
        </FormControl>
          </Grid>
          <br/>
          <Grid>
            <TextField
                id="availbility_hours_lower"
                name="availability_hours_lower"
                onChange={handleChange}
                label="Availability Lower Limit"
                type="time"
                defaultValue={updateFormData.availability_hours_lower}
                value={updateFormData.availability_hours_lower}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="time"
                name="availability_hours_upper"
                onChange={handleChange}
                label="Availability Upper Limit"
                type="time"
                defaultValue={updateFormData.availability_hours_upper}
                value={updateFormData.availability_hours_upper}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update Profile
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = state => {
    
    return{
        currentUser: state.currentUser,
        updateFormData: state.updateProfile        
    }
 }

export default connect(mapStateToProps, {updateProfileForm, update, setProfileForm})(UpdateProfileForm)