import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
//import { AuthContext } from '../context/AuthContext';
import styles from "./Data.module.css"


export const Navbar = () => {
    // const navigate = useNavigate()
    // const { logout } = React.useContext(AuthContext)
    // const onLogout = () => {
    //     logout()
    //     navigate("/")

    // }
    return (
        <div className={styles.nav}>
            <Link className={styles.link} to="/">HOME</Link>
            <Link className={styles.link} to="/employee">Employee</Link>
            <Link className={styles.link} to="/register">Register</Link>
            <Link className={styles.link} to="/login">LOGIN</Link>
            <button className={styles.link} >LOGOUT</button>
        </div>
    )
}