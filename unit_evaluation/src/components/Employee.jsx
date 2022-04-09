import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { get_employeedata } from '../Redux/Action'
import styles from "./Data.module.css"

export const Employee = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const employeeData = useSelector(state => state.employeeData)
    console.log(employeeData)
    React.useEffect(() => {
        fetch("http://localhost:3000/data")
            .then((res) => res.json())
            .then((res) => dispatch(get_employeedata(res)))
    }, [])
    return (
        <div>
            <button className={styles.button} onClick={() => navigate("/employee/create")}>CREATE EMPLOYEE DATA</button>
            <div className={styles.tablediv}>
                <h1 className={styles.tableh1}>EMPLOYEES DATA</h1>
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
                                <td><Link to={`/employee/${item.id}`}>VieW</Link></td>
                                <td>EDIT</td>
                                <td>DELETE</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
