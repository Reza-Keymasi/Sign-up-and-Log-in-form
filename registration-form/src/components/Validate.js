export const validate = (data, type) => {

    const errors = {};


    
    if (!data.email) {
        errors.email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email Address Is Invalid"
    } else {
        delete errors.email
    }

    if(!data.password) {
        errors.password = "Password Is Required"
    } else if (data.password.lenght < 6) {
        errors.password = "Password Needs 6 Characters Or More"
    } else {
        delete errors.password
    }



    if (type === "signup") {
        
        if (!data.name.trim()) {
            errors.name = "UserName Required"
        } else {
            delete errors.name
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "Confirm The Password"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Password Not Matched"
        } else {
            delete errors.confirmPassword
        }
    
        if (data.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = "Accept Our Regulations"
        }
    }

    return errors;

}