import React from 'react'
import styles from "./Data.module.css"
import { useNavigate } from "react-router-dom"

export const Register = () => {
  const [formData, setFormData] = React.useState({ email: "", password: "", username: "", mobile: "", description: "" })
  const { name, email, password, username, mobile, description } = formData
  const navigate = useNavigate()
  const handleChange = (e) => {
    let { name, value } = e.currentTarget

    setFormData({
      ...formData,
      [name]: value
    })

  }
  const submit_userdata = (e) => {
    e.preventDefault()
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" }
    })
      .then((res) => res.json())
      .then((res) => navigate("/login"))
      .catch((err) => console.log(err))


  }
  return (
    <div>
      <h1 className={styles.heading}>Register Here</h1>
      <form className={styles.form} onSubmit={submit_userdata}>
        <input className={styles.input} type="text" name="name" placeholder='Enter Your Name' value={name} onChange={handleChange} />
        <br />
        <input className={styles.input} type="email" name="email" placeholder='Enter Your Email' value={email} onChange={handleChange} />
        <br />
        <input className={styles.input} type="password" name="password" placeholder='Enter Your Password' value={password} onChange={handleChange} />
        <br />
        <input className={styles.input} type="text" name="username" placeholder='Enter Your Username' value={username} onChange={handleChange} />
        <br />
        <input className={styles.input} type="text" name="mobile" placeholder='Enter Your Mobile' value={mobile} onChange={handleChange} />
        <br />
        <input className={styles.input} type="text" name="description" placeholder='Enter Your description' value={description} onChange={handleChange} />
        <br />
        <input className={styles.button} type="submit" value="Redirect To Login Page" />
      </form>
    </div>
  )
}
