export const validate = (data) => {

    const errors = {}

    if(!data.name.trim()) {
        errors.name = "Username Required"
    } else{
        delete errors.name
    }

    if (!data.email) {
        errors.email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email Address Is Invalid"
    } else {
        delete errors.email
    }

    if(!data.password) {
        errors.password = "Password Is Required" 
    } else if (data.password.length < 6) {
        errors.password = "Password Needs More Than 6 Characters"
    } else {
        delete errors.password
    }
    
    if(!data.confirmPassword) {
        errors.confirmPassword = "Confirm The Password " 
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Passwords Do Not Matched"
    } else {
        delete errors.confirmPassword
    }

    if(data.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = "Accept Our Regulations"
    }
    return errors
}