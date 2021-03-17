export const updateProfileForm = (formData) => {
    return {
        type: "UPDATE_PROFILE_FORM",
        formData: formData
    }
}

export const resetSignupForm = () => {
    return {
        type: "RESET_PROFILE_FORM",
    }
}