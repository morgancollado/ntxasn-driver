const currentUserReducer = (state = null, action) => {
    switch (action.type){
        case "SET_CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return null
        case "UPDATE_RIDE":
            let driver_rides = state.attributes.driver_rides.map(ride => ride.id === action.ride.id ? action.ride : ride)
                return {
                    ...state,
                    attributes: {
                        ...state.attributes,
                        driver_rides
                    }
                }
        default: 
            return state
    }
}

export default currentUserReducer