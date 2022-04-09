import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.nav}>
            <Link className={styles.link} to="/">Home</Link>
            <Link className={styles.link} to="todo">Todo</Link>
            <Link className={styles.link} to="login">Login</Link>
        </div>
    )
}
