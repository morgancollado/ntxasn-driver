export const updateProfileForm = (formData) => {
    return {
        type: "UPDATE_PROFILE_FORM",
        formData: formData
    }
}

export const resetProfileForm = () => {
    return {
        type: "RESET_PROFILE_FORM",
    }
}

export const setProfileForm = (formData) => {
    return {
        type: 'SET_PROFILE_FORM', 
        formData: formData
    }
}