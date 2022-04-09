import React, { useState } from 'react'
import styles from "./Data.module.css"

export const EmployeeCreate = () => {
    const initialValue = {
        name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        gender: "",
        mobile: "",
    }
    const [formData, setFormData] = useState(initialValue)
    const { name, age, address, department, salary, gender, mobile } = formData
    const handleChange = (e) => {
        let { name, type, checked, value } = e.currentTarget
        value = (type === "checkbox") ? checked : type === "number" ? +value : value

        setFormData({
            ...formData,
            [name]: value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/data", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "content-type": "application/json" }
        })
            .then((res) => res.json())
            .then((res) => {
                setFormData(initialValue)
            })
            .catch((err) => console.log(err))

    }
    return (
        <div>
            <h1 className={styles.h1}>USER FORM</h1>
            <form className={styles.form} onSubmit={handleSubmit}>

                <input className={styles.input} type="text" placeholder='Enter your Name' name='name' value={name} onChange={handleChange} />
                <br />

                <input className={styles.input} type="text" placeholder='Enter your AGE' name='age' value={age} onChange={handleChange} />
                <br />

                <input className={styles.input} type="text" placeholder='Enter your ADDRESS' name='address' value={address} onChange={handleChange} />
                <br />

                <select className={styles.input} name="department" value={department} onChange={handleChange}>
                    <option value="">Select Option</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="IT">IT</option>
                </select>
                <br />

                <input className={styles.input} type="number" placeholder='Enter your Salary' name='salary' value={salary} onChange={handleChange} />
                <br />

                <input className={styles.input} type="number" placeholder='Enter your MobileNo' name='mobile' value={mobile} onChange={handleChange} />
                <br />
                <select className={styles.input} name="gender" value={gender} onChange={handleChange}>
                    <option value="">Select Option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <br />
                <input className={styles.button} type="submit" value="SUBMIT" />
            </form>
        </div>

    )
}

