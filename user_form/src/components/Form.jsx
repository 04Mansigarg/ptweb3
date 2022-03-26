import React, { useState } from 'react'
import { TableItem } from './TableItem'
import styles from "./Form.module.css"

export const Form = () => {

    const initialValue = {
        name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        maritalStatus: false,
    }

    const [formData, setFormData] = useState(initialValue)
    const [employeeData, setEmployeeData] = useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const { name, age, address, department, salary, maritalStatus } = formData

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

        fetch("http://localhost:3000/user_data", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "content-type": "application/json" }
        })
            .then((res) => res.json())
            .then((res) => {
                setEmployeeData([...employeeData, res])
                setFormData(initialValue)
            })
            .catch((err) => console.log(err))

    }

    const getMethod = () => {
        setLoading(true)
        fetch("http://localhost:3000/user_data")
            .then((res) => res.json())
            .then((res) => setEmployeeData(res))
            .catch(err => {
                setError(true)
                console.log(err)
            })
            .finally(() => setLoading(false))
    }
    React.useEffect((
        getMethod
    ), [])

    return (loading) ? <h1>LOADING...</h1> : (error) ? <h1>SOMETHING WENT WRONG.....</h1>
        :
        (
            <div>
                <h1 className={styles.h1}>USER FORM</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>NAME</label>
                    <br />
                    <input className={styles.input} type="text" placeholder='Enter your Name' name='name' value={name} onChange={handleChange} />
                    <br />
                    <label className={styles.label}>AGE</label>
                    <br />
                    <input className={styles.input} type="text" placeholder='Enter your AGE' name='age' value={age} onChange={handleChange} />
                    <br />
                    <label className={styles.label}>ADDRESS</label>
                    <br />
                    <input className={styles.input} type="text" placeholder='Enter your ADDRESS' name='address' value={address} onChange={handleChange} />
                    <br />
                    <label className={styles.label}>Department</label>
                    <br />
                    <select className={styles.input} name="department" value={department} onChange={handleChange}>
                        <option value="">Select Option</option>
                        <option value="HR">HR</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="IT">IT</option>
                    </select>
                    <br />
                    <label className={styles.label}>Salary</label>
                    <br />
                    <input className={styles.input} type="number" placeholder='Enter your Salary' name='salary' value={salary} onChange={handleChange} />
                    <br />
                    <label className={styles.label}>MARITAL STATUS</label>
                    <br />
                    <input className={styles.checkbox} type="checkbox" name="maritalStatus" checked={maritalStatus} onChange={handleChange} />
                    <br />
                    <input className={styles.submit} type="submit" value="SUBMIT" />
                </form>
                <TableItem employeeData={employeeData} />
            </div>
        )
}
