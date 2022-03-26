import React from 'react'
import styles from "./Table.module.css"

export const TableItem = ({ employeeData }) => {
    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>EMPLOYEES DATA</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ADDRESS</th>
                        <th>DEPARTMENT</th>
                        <th>SALARY</th>
                        <th>MARITAL STATUS</th>
                    </tr>
                </thead>

                <tbody>
                    {employeeData.map(item => {
                        return <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                            <td>{item.department}</td>
                            <td>{item.salary}</td>
                            <td>{item.maritalStatus ? "YES" : "NO"}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
