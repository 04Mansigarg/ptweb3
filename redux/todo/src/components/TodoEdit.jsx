import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { get_todo } from '../redux_todo/Action'

export const TodoEdit = () => {
    const [show, setShow] = React.useState(false)
    const [task, setTask] = React.useState("")
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [singleTask, setSingleTask] = React.useState([])
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
    const handleEdit = (task) => {
        const payload = {
            task: task,
            status: false,
        }

        fetch(`http://localhost:3000/todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json())
            .then((res) => {
                setSingleTask([res])
                setTask("")
                setShow(!show)
                getData()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={() => navigate("/todo")}>MOVE to TODO LIST</button>
            {
                singleTask.map(item => {
                    return <div key={id}>
                        {show ? <>
                            <input type="text" placeholder="Add Task" value={task} onChange={(e) => setTask(e.currentTarget.value)} />
                            <button onClick={() => handleEdit(task)}>UPDATE</button>
                        </> :
                            <>
                                <h1>TASK : {item.task}</h1>
                                <h2>STATUS:{item.status ? "YES" : "NO"}</h2>
                                <div> <button onClick={() => setShow(!show)}>EDIT</button></div>
                            </>
                        }
                    </div>
                })
            }
        </div>
    )
}
