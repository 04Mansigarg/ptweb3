import React from 'react'
import { TodoInput } from './TodoInput'
import { useDispatch, useSelector } from "react-redux"
import { get_todo } from '../redux_todo/Action'
import { Link } from 'react-router-dom'

export const Todo = () => {
    const dispatch = useDispatch()
    const todo = useSelector((state => state.todo))
    console.log(todo)


    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch("http://localhost:3000/todos")
            .then((res => res.json()))
            .then((res) => dispatch(get_todo(res)))
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <TodoInput />
            <div>
                {todo.map((item) => {
                    return <div key={item.id}>
                        <Link to={`/todo/${item.id}`}>{item.task}</Link>
                    </div>
                })}
            </div>
        </div>
    )
}
