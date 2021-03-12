import React from 'react'
import {connect} from 'react-redux'
import Logout from './Logout'
import {NavLink} from 'react-router-dom'

const NavBar = (props) =>{
    
    return(
        <div className="NavBar">
            <NavLink exact activeClassName="active" to='/rides'>My Rides</NavLink>
            <NavLink exact activeClassName="active" to='/user/edit'>Update Availability</NavLink>
            <p id="welcome">Hello, {props.user.attributes.name}</p>
            {props.currentUser ? <Logout history={props.history}/>: null}
        </div>
    )
}
const mapStateToProps = state => {
    return {
      currentUser: state.currentUser 
    }
  }

export default connect(mapStateToProps)(NavBar) 