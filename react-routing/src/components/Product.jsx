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

  const ascedingOrder = () => {
    console.log(1)
    fetch("http://localhost:3000/product?_sort=price&_order=asc")
      .then((res) => res.json())
      .then(res => setdata(res))
      .catch(err => console.log(err))
  }
  const descendingOrder = () => {
    fetch("http://localhost:3000/product?_sort=price&_order=desc")
      .then((res) => res.json())
      .then(res => setdata(res))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div>
        <div>Show Filters</div>
        <div>
          <input type="checkbox" /> <span>Mobiles</span>
          <br />
          <input type="checkbox" /> <span>Clothing</span>
          <br />
          <input type="checkbox" /> <span>Food</span>
          <br />
          <input type="checkbox" /> <span>Stationary</span>
          <br />
        </div>
      </div>
      <div>
        <button onClick={ascedingOrder}>Sort in Ascending Order</button>
        <button onClick={descendingOrder}>Sort in Descending Order</button>
      </div>
      <div className={styles.div}>
        {data.map(item => {
          return <div className={styles.item_div} key={item.id}>
            <img className={styles.img} src={item.image} alt="" />
            <br />
            <Link className={styles.details} to={`/product/${item.id}`}>More Details</Link>
            <h1>{item.category}</h1>
            <h3>{item.name}</h3>
            <h4>Price :{item.price}</h4>


          </div>


        })}
      </div>
    </div>
  )
}
