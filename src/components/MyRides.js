import React from 'react'
import {connect} from 'react-redux'
import DriverRide from './DriverRide'


const MyRides = (props) => {
     console.log(props)
     
     
     const driverRides = props.driverRides.length > 0 ? props.driverRides.map(r => <DriverRide ride={r} key={r.id}/>) : []

    return( 
        <div className="MyRides">
             {driverRides.length > 0 ? driverRides :null}
        </div>
    )
}

const mapStateToProps = (state) =>{
    
    return {
        driverRides: state.currentUser.attributes.driver_rides
    }
}

export default  connect(mapStateToProps)(MyRides)