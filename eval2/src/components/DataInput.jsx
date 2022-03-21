import React, { useState } from 'react'

import styles from "./Data.module.css"

export const DataInput = ({ handleAdd }) => {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [department, setDepartment] = useState("")
    const [role, setRole] = useState("")
    const [salary, setSalary] = useState("")
    let info = {
        name,
        gender,
        department,
        role,
        salary: Number(salary)

    }

    return (
        <div>
            <input className={styles.input} type="text" placeholder='Name' value={name} onChange={(e) => setName(e.currentTarget.value)} />
            <br />
            <input className={styles.input} type="text" placeholder='Gender' value={gender} onChange={(e) => setGender(e.currentTarget.value)} />
            <br />
            <input className={styles.input} type="text" placeholder='Department' value={department} onChange={(e) => setDepartment(e.currentTarget.value)} />
            <br />
            <input className={styles.input} type="text" placeholder='Role' value={role} onChange={(e) => setRole(e.currentTarget.value)} />
            <br />
            <input className={styles.input} type="number" placeholder='Salary' value={salary} onChange={(e) => setSalary(e.currentTarget.value)} />
            <br />
            <button className={styles.button}
                onClick={() => {
                    // eslint-disable-next-line no-sequences

                    handleAdd(info)
                    setName("")
                    setGender("")
                    setDepartment("")
                    setRole("")
                    setSalary("")
                }
                }>ADD EMPLOYEE DATA</button>

        </div>
    )
}
