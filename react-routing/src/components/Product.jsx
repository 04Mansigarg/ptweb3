import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

export const Product = () => {
  const [data, setdata] = React.useState([])
  const getMethod = () => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((res) => setdata(res))
      .catch((err) => console.log(err))
  }
  React.useEffect((
    getMethod
  ), [])
  return (
    <div>
      {data.map(item => {
        return <div className={styles.div} key={item.id}>
          <h1>{item.category}</h1>
          <h1>{item.name}</h1>
          <h1>{item.price}</h1>
          <Link to={`/product/${item.id}`}>More Details</Link>
        </div>

      })}
    </div>
  )
}
