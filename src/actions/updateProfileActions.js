export const updateProfileForm = (formData) => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData: formData
    }
}

export const resetSignupForm = () => {
    return {
        type: "RESET_SIGNUP_FORM",
    }
}