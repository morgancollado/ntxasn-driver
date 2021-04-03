import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {connect} from 'react-redux'
import {updateRide } from '../actions/rideActions'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    }
  }));

  const DriverRidePickUp = ({ride, updateRide, history}) => {
      const classes = useStyles

      const handleChange = event => {
        const {name, value } = event.target
        const updatedFormInfo = {
            ...ride,
            [name]: value
        }
        updateRide(updatedFormInfo, history)
    }


      return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Initial Pickup
          </Typography>
          <Typography variant="h5" component="h2">
          Appointment Date and Time: {ride.attributes.date_time}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          Appointment Type: {ride.attributes.appointment_type}
          </Typography>
          <Typography variant="body2" component="p">
          Location From: {ride.attributes.location_from}
            <br />
            Location To: {ride.attributes.location_to}
          </Typography>
          <Typography variant="body2" component="p">
          Passenger: {ride.attributes.passenger ? ride.attributes.passenger.name : "Your Driver information will appear here once a driver is assigned"} 
            <br />
            Phone Number: {ride.attributes.passenger ? ride.attributes.passenger.phone_number: "Your Driver information will appear here once a driver is assigned"}
          </Typography>
          <Typography variant="body2" component="p">
        
            Email: {ride.attributes.passenger ? ride.attributes.passenger.email : "Your Driver information will appear here once a driver is assigned"}
          </Typography>
        </CardContent>
        <CardActions>
          <Container >
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Ride Status</InputLabel>
              <Select
              name="stage"
              onChange={handleChange}
              >
                <MenuItem value="clinic_dropoff">Clinic Dropoff</MenuItem>

              </Select>
            </FormControl>

          </Container>
        </CardActions>
      </Card>
      )
  }
  export default connect(null, {updateRide})(DriverRidePickUp)