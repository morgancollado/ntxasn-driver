import React from 'react'
import {connect} from 'react-redux'
import { logout } from '../actions/currentUserActions'

const Logout = ({ logout, history }) =>{
    
    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            logout()
            history.push('/')
        }}>
            <input value="log out" type="submit"/>
        </form>

    )
}


export default connect(null, { logout})(Logout)