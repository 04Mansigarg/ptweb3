import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import styles from "./Navbar.module.css"

export const Home = () => {
  const [data, setData] = React.useState([])
  const { token } = useContext(AuthContext)
  // alert(token)

  const getData = () => {
    fetch("https://masai-api-mocker.herokuapp.com/user/johnfly", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData([...data, res])
      })
      .catch((err) => console.log(err))
  }




  React.useEffect(() => {
    if (!token) {
      return
    }
    else {
      getData()
    }
  }, [token])





  return (
    <div>
      <h1 className={styles.user_details_heading}>User Info</h1>
      {data.length > 0 && data.map((item) => {
        return <div className={styles.user_details_div}>
          <h1>Name : {item.name}</h1>
          <h1>Email : {item.email}</h1>
          <h1>UserName : {item.username}</h1>
          <h1>Mobile Number : {item.mobile}</h1>
          <h1>Description : {item.description}</h1>
        </div>
      })}
    </div>
  )
}
