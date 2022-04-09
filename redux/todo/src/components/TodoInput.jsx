import React from 'react'
import { useDispatch } from "react-redux"
import { add_todo } from '../redux_todo/Action'

export const TodoInput = () => {
    const [task, setTask] = React.useState("")
    const dispatch = useDispatch()

    const handleADD = () => {
        let payload = {
            task,
            status: false,
        }
        dispatch(add_todo(payload))

        fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setTask("")
            })
    }
    return (
        <div>
            <div>
                <input type="text" placeholder="Add Task" value={task} onChange={(e) => setTask(e.currentTarget.value)} />
                <button onClick={handleADD}>ADD</button>
            </div>
        </div>
    )
}
