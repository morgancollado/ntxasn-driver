import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {connect} from 'react-redux'


const useStyles = makeStyles({
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
  });

  const DriverRidePickUp = ({ride}) => {
      const classes = useStyles

      return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            My Driver Rides
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
          <Container>
              <form>
                <RadioGroup aria-label="Picked up?" name="gender1" >
                    <FormControlLabel value="female" control={<Radio />} label="Picked up?" />
                </RadioGroup>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Submit
                </Button>

              </form>

          </Container>
          <Link to={`/rides/${ride.id}/initialpickup`}>
            <Button> 
              Please click here after you have picked up the client.
            </Button>
          </Link>
  
        </CardActions>
      </Card>
      )
  }
  export default DriverRidePickUp