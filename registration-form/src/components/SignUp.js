import React, { useState} from 'react';
import styles from "./SignUp.module.css";

const SignUp = () => {

    const [data, setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false,
    })

    const changeHandler = (event) => {
        if(event.target.name === "isAccepted") {
            setData({...data, [event.target.name] : event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
        console.log(data)
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <h2 className={styles.header}>Sign Up</h2>
                <div>
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={changeHandler}>
                    </input>
                </div>

                <div>
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={changeHandler}>
                    </input>
                </div>

                <div>
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={changeHandler}>
                    </input>
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                    type="password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={changeHandler}>
                    </input>
                </div>

                <div>
                    <label>I Accept Privacy Policy</label>
                    <input
                    type="checkbox"
                    name="isAccepted"
                    value={data.isAccepted}
                    onChange={changeHandler}>
                    </input>
                </div>
                <div>
                    <a href="#">Login</a>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;