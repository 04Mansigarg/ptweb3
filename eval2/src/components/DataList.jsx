import React from 'react'
import styles from "./Data.module.css"


export const DataList = ({ item }) => {
    console.log(item)
    return (
        <div className={styles.user_data}>
            <h1> NAME: {item.name}</h1>
            <h1> GENDER: {item.gender}</h1>
            <h1>DEPARTMENT: {item.department}</h1>
            <h1>ROLE: {item.role}</h1>
            <h1>SALARY: {item.salary}</h1>
        </div>
    )
}
