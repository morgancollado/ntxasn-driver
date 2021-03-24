const initialState = {
    id: '',
    name: '',
    email: '',
    phone_number: '',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    availability_hours_lower: '',
    availability_hours_upper: ''
}

const updateProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_PROFILE_FORM":
            console.log(action.formData)
            return action.formData
        case "RESET_SIGNUP_FORM":
            return initialState
        case "SET_PROFILE_FORM":
            return action.formData
        default: 
            return state
    }
}

export default updateProfileReducer