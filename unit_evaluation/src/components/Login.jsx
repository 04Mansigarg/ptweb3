import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { get_token, login_auth } from '../Redux/Action'
import styles from "./Data.module.css"

export const Login = () => {
  const [formData, setFormData] = React.useState({ username: "", password: "" })
  const { username, password } = formData
  const navigate = useNavigate()
  
  const dispatch = useDispatch()

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
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          dispatch(login_auth(true))
          dispatch(get_token(res.token))
        }

      })
      .then(() => {
        navigate("/")
      })

      .catch((err) => navigate("/register"))


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
