import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from './components/LoginForm'
import { Route, withRouter, Switch} from 'react-router-dom'
import {getCurrentUser} from './actions/currentUserActions'
import Home from './components/Home'
import NavBar from './components/NavBar'
import RidesContainer from './containers/RidesContainer'
import UpdateProfileForm from './components/UpdateProfileForm'
import DriverRidePickUp from './components/DriverRidePickUp'
import DriverRideClinicDropOff from './components/DriverRideClinicDropOff'
import DriverRideClinicPickup from './components/DriverRideClinicPickup'
import DriverRideFinalDropOff from './components/DriverRideFinalDropOff'

class App extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }
  
  render(){
    const {loggedIn, rides} = this.props
   return(
     <div>
       {loggedIn ? <NavBar user={this.props.loggedIn} location={this.props.loggedIn} history={this.props.history}/> : null}
       <Switch>
         
         <Route exact path='/login' component={LoginForm}/>
         <Route exact path='/' render={() => loggedIn ? <RidesContainer/> : <Home/>}/>
         <Route exact path='/users/edit' component={UpdateProfileForm}/>
         <Route exact path='/rides/:id/initialpickup' render={(props) => {
            const ride = rides.find(ride => ride.id === props.match.params.id)
            return <DriverRidePickUp ride={ride} {...props}/>
         }}/>
         <Route exact path='/rides/:id/clinicdropoff' render={(props) => {
            const ride = rides.find(ride => ride.id === props.match.params.id)
            return <DriverRideClinicDropOff ride={ride} {...props}/>
         }}/>
         <Route exact path='/rides/:id/clinicpickup' render={(props) => {
            const ride = rides.find(ride => ride.id === props.match.params.id)
            return <DriverRideClinicPickup ride={ride} {...props}/>
         }}/>
         <Route exact path='/rides/:id/finaldropoff' render={(props) => {
            const ride = rides.find(ride => ride.id === props.match.params.id)
            return <DriverRideFinalDropOff ride={ride} {...props}/>
         }}/>

       </Switch>

     </div>
   )
  }
}
const mapStateToProps = state =>{ 
  if (state.currentUser === null){
    return ({
      loggedIn: !!state.currentUser
    })

    }else {
      return({
        loggedIn: state.currentUser,
        rides: state.currentUser.attributes.driver_rides
      })
    }
  }

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));
