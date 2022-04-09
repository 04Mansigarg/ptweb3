import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "./Data.module.css"

export const EmployeeDetails = () => {
    const [employee, setemployee] = React.useState([])
    const { id } = useParams()
    const navigate = useNavigate()
    React.useEffect(() => {
        fetch(`http://localhost:3000/data/${id}`)
            .then((r) => r.json())
            .then((data) => {
                setemployee([...employee, data])
                console.log(data)

            })
            .catch((error) => {
                console.log("err:", error)
            })

    }, [])
    const moveToemployee = () => {
        navigate("/employee")
    }
    return (
        <div>
            <button onClick={moveToemployee} className={styles.button}>Go to Employee Page</button>
            <h1 className={styles.user_details_heading}>EmployeeDetail</h1>
            {employee.map((item) => {
                return <div className={styles.user_details_div} key={item.id}>
                    <h1>Name : {item.name}</h1>
                    <h1>Salary : {item.salary}</h1>
                    <h1>Age : {item.age}</h1>
                    <h1>Gender : {item.gender}</h1>
                    <h1>MobileNo : {item.mobile}</h1>
                    <h1>Department : {item.department}</h1>
                </div>
            })}
        </div>
    )
}
