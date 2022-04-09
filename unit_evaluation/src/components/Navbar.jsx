import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login_auth } from '../Redux/Action';
//import { AuthContext } from '../context/AuthContext';
import styles from "./Data.module.css"


export const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(login_auth(true))
        navigate("/")

    }
    return (
        <div className={styles.nav}>
            <Link className={styles.link} to="/">HOME</Link>
            <Link className={styles.link} to="/employee">Employee</Link>
            <Link className={styles.link} to="/register">Register</Link>
            <Link className={styles.link} to="/login">LOGIN</Link>
            <button className={styles.link} onClick={onLogout} >LOGOUT</button>
        </div>
    )
}