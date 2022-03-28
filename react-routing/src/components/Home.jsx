import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Home = () => {
  const [data, setData] = React.useState([])
  const { token } = useContext(AuthContext)
  console.log(token)

  const getData = () => {
    fetch("https://masai-api-mocker.herokuapp.com/user/johnfly", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res)

      })
      .catch((err) => console.log(err))
  }
  React.useEffect((
    getData


  ), [])


  return (
    <div>
      <h1>User Info</h1>
      <h1>{token}</h1>
      {data.map((item) => {
        return (
          <h1>{item.name}</h1>
        )


      })}
    </div>
  )
}
