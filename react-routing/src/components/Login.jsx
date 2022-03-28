import React from 'react'
import styles from "./Navbar.module.css"
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

export const Login = () => {
    const [formData, setFormData] = React.useState({ username: "", password: "" })
    const { username, password } = formData
    const { login } = React.useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        let { name, value } = e.currentTarget

        setFormData({
            ...formData,
            [name]: value
        })

    }
    const login_detail = (e) => {
        e.preventDefault()
        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "content-type": "application/json" }
        })
            .then((res) => res.json())
            .then((res) => {
                login(res.token)


            }
            )
            .catch((err) => console.log(err))

        navigate("/")
    }
    return (
        <div>
            <h1 className={styles.heading}>User Login</h1>
            <form className={styles.form} onSubmit={login_detail}>
                <input className={styles.input} type="test" name="username" placeholder='Enter Your Username' value={username} onChange={handleChange} />
                <br />
                <input className={styles.input} type="password" name="password" placeholder='Enter Your Password' value={password} onChange={handleChange} />
                <br />
                <input className={styles.button} type="submit" value="Submit" />
            </form>
        </div>
    )
}
