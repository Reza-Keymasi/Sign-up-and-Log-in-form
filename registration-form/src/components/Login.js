import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"


import { validate } from "./Validate";
import {notify} from "./Toast";
import styles from "./LogIn.module.css";
import wave from "./images/wave5.jpg";


const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validate(data, "login"))
    }, [data, touched])

    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const focusHandler = (event) => {
        setTouched({...touched, [event.targe.name]:true});
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(!Object.keys(errors).length) {
            notify("Logged In Successfully", "success")
        } else{
            notify("Invalid Data", "error")
            setTouched({
                email: true,
                pasword: true,
            })
        }
    }

    return (
        <div className={styles.container}>
            <img className={styles.container} src={wave} alt="Wave"></img>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                    type="text" 
                    name="email" 
                    value={data.email} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}>
                    </input>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                    type="password" 
                    name="password" 
                    value={data.password} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}>
                    </input>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formButtons}>
                <Link href="/signup">Sign Up</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;