import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import { get_todo } from '../redux_todo/Action'

export const TodoDetails = () => {
    const [singleTask, setSingleTask] = React.useState([])
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    React.useEffect(() => {
        fetch(`http://localhost:3000/todos/${id}`)
            .then((res) => res.json())
            .then((res => setSingleTask([...singleTask, res])))
            .catch(err => console.log(err))
    }, [])

    const getData = () => {
        fetch("http://localhost:3000/todos")
            .then((res => res.json()))
            .then((res) => dispatch(get_todo(res)))
            .catch((err) => console.log(err))
    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then(() => {
                getData()
                navigate("/todo")
            })
            .catch((err) => console.log(err))

    }

    const handleToggle = (item) => {
        const payload = {
            status: !item.status
        }

        fetch(`http://localhost:3000/todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json())
            .then((res) => {
                setSingleTask([res])
                getData()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                singleTask.map(item => {
                    return <div key={item.id}>
                        <h1>TASK : {item.task}</h1>
                        <h2>STATUS:{item.status ? "YES" : "NO"}</h2>
                        <div>
                            <button onClick={() => handleDelete(item)}>DELETE</button>
                            <button onClick={() => handleToggle(item)}>TOGGLE</button>
                        </div>

                    </div>
                })
            }
        </div>
    )
}
