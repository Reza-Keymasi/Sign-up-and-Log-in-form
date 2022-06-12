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

    return (
        <div clasName={styles.container}>
            <from className={styles.formContainer}>
                <h2 className={styles.header}>Sign Up</h2>
                <div>
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    value={data.name}>
                    </input>
                </div>

                <div>
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    value={data.email}>
                    </input>
                </div>

                <div>
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    value={data.password}>
                    </input>
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                    type="password"
                    name="confirmPassword"
                    value={data.confirmPassword}>
                    </input>
                </div>

                <div>
                    <label>I Accept Privacy Policy</label>
                    <input
                    type="checkbox"
                    name="isAccepted"
                    value={data.isAccepted}>
                    </input>
                </div>
                <div>
                    <a href="#">Login</a>
                    <button type="submit">Submit</button>
                </div>
            </from>
        </div>
    );
};

export default SignUp;