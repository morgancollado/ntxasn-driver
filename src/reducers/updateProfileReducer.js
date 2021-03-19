const initialState = {
    name: '',
    email: '',
    phone_number: '',
    availability_days: '',
    availability_hours_lower: '',
    availability_hours_upper: ''
}

const updateProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_PROFILE_FORM":
            debugger
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