import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
  const [product, setproduct] = React.useState([])
  const { id } = useParams()

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





  return (
    <div>
      <h1>Product Detail</h1>
      {
        product.map((items) => {
          return <div key={items.id}>
            <h1>{items.name}</h1>

            <img width="1000px" src={items.image} alt="logo" />
            <h1>{`Price : ${items.price} Rs`}</h1>
            <h1>{items.color}</h1>

          </div>
        }

        )
      }

    </div>
  )
}
