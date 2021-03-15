import React from 'react';
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
import {updateProfileForm} from '../actions/updateProfileActions'
import { update } from '../actions/currentUserActions'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';



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
const UpdateProfileForm =({updateFormData, updateProfileForm, update, history })=>  {
  const classes = useStyles();

  const handleChange = event => {
    const {name, value } = event.target
    const updatedFromInfo = {
        ...updateFormData,
        [name]: value
    }
    updateProfileForm(updatedFromInfo)
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
                label="name"
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
            <Grid>
                <InputLabel>Available Days</InputLabel>
                <Select
                    value={updateFormData.availability_days}
                    onChange={handleChange}
                >
                    <MenuItem value={"Monday"}> Monday</MenuItem>
                    <MenuItem value={"Tuesday"}> Tuesday</MenuItem>
                    <MenuItem value={"Wednesday"}> Wednesday</MenuItem>
                    <MenuItem value={"Thursday"}> Thursday</MenuItem>
                    <MenuItem value={"Friday"}> Friday</MenuItem>
                    <MenuItem value={"Saturday"}> Saturday</MenuItem>
                    <MenuItem value={"Sunday"}> Sunday</MenuItem>
                </Select>
            </Grid>
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
        updateFormData: state.currentUser
    }
 }

export default connect(mapStateToProps, {updateProfileForm, update})(UpdateProfileForm)