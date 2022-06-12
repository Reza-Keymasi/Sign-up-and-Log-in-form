import React, { useState, useEffect } from 'react';
import styles from "./SignUp.module.css";

import { validate } from "./Validate"

const SignUp = () => {

    const [data, setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false,
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data))
        console.log(errors)
    }, [data, touched])



    const changeHandler = (event) => {
        if(event.target.name === "isAccepted") {
            setData({...data, [event.target.name] : event.target.checked})
        } else {
            setData({...data, [event.target.name] : event.target.value})
        }
        console.log(data)
    }

    const focusHandler =(event) => {
        setTouched({...data, [event.target.name] : true})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {

        }else {
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            })
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>Sign Up</h2>
                <div>
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={changeHandler}
                    onFocus={focusHandler}>
                    </input>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>

                <div>
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={changeHandler}
                    onFocus={focusHandler}>
                    </input>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>

                <div>
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={changeHandler}
                    onFocus={focusHandler}>
                    </input>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                    type="password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={changeHandler}
                    onFocus={focusHandler}>
                    </input>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div>
                    <label>I Accept Privacy Policy</label>
                    <input
                    type="checkbox"
                    name="isAccepted"
                    value={data.isAccepted}
                    onChange={changeHandler}
                    onFocus={focusHandler}>
                    </input>
                    {errors.name && touched.isAccepted && <span>{errors.isAccepted}</span>}
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