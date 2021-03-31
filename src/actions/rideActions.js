
export const updateRideConfirm = (ride) => {
    return {
        type: "UPDATE_RIDE",
        ride: ride
    }
}

export const updateRide= (rideData, history) => {
    console.log(rideData)
    return dispatch => {
        const info = {
            ride: rideData
        }
        return fetch(`http://localhost:3000/api/v1/rides/${rideData.id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error){
                alert(resp.error)
            } else {
                dispatch(updateRideConfirm(resp.data))
                history.push('/')
            }
        })

    }
}

export const setEditForm = ride => {
    return {
        type: 'SET_EDIT_FORM',
        ride: ride
    }
}