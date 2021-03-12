import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from './components/LoginForm'
import { Route, withRouter, Switch} from 'react-router-dom'
import {getCurrentUser} from './actions/currentUserActions'
import Home from './components/Home'
import NavBar from './components/NavBar'

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
         <Route exact path='/' component={Home}/>

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
