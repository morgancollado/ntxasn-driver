import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'



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

const MyDriverRide = ({ride}) => {
  console.log(ride)
    

  const classes = useStyles();

  let link
  switch(ride.initial_pickup){
    case true:
      return null
    case false:
      return link = <Link to={`/rides/${ride.id}/initialpickup`}>
                      <Button>
                          Please click here once you have begun this ride.
                       </Button>
                     </Link>
      default:
      return null
  }

  // if (ride.initial_pickup === false){
  //   link = <Link to={`/rides/${ride.id}/initialpickup`}>
  //   <Button>
  //     Please click here once you have begun this ride.
  //   </Button>
  // </Link>
  // }else if (ride.clinic_dropoff === false){
  //   link = <Link to={`/rides/${ride.id}/clinicdropoff`}>
  //   <Button>
  //     Please click here once you have dropped the patient off at the clinic.
  //   </Button>
  // </Link>
  // }else if (ride.clinic_pickup === false){
  //   link = <Link to={`/rides/${ride.id}/clinicpickup`}>
  //   <Button>
  //     Please click here once you have picked the patient up from the clinic.
  //   </Button>
  // </Link>
  // } else if (ride.final_dropoff === false){
  //   link = <Link to={`/rides/${ride.id}/finaldropoff`}>
  //   <Button>
  //     Please click here once you have ended this ride.
  //   </Button>
  // </Link>
  // }




  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          My Driver Ride
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
        <Button size="small">If you cannot make this ride, please contact our Hotline Coordinator</Button>
        {link}
     

      </CardActions>
    </Card>
  );
}

export default MyDriverRide