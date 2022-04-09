import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "./Navbar.module.css"

export const ProductDetail = () => {
  const [product, setproduct] = React.useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setproduct([...product, data])
        console.log(data)

      })
      .catch((error) => {
        console.log("err:", error)
      })

  }, [])

  const moveToProduct = () => {
    navigate("/product")
  }





  return (
    <div>
      <div className={styles.previous_div}><button onClick={moveToProduct} className={styles.previous}>Go to Product Page</button></div>
      <h1>Product Detail</h1>
      {
        product.map((items) => {
          return <div key={items.id}>
            <h1>{items.name}</h1>

            <img width="1000px" src={items.image} alt="logo" />
            <h1>{`Price : ${items.price} Rs`}</h1>
            <h1>Description :{items.color}</h1>

          </div>
        }

        )
      }

    </div>
  )
}
