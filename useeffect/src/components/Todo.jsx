import React from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import styles from "./Todo.module.css"

export const Todo = () => {
    const [todo, setTodo] = React.useState([])
    const handleAdd = (item) => {
        if (item) {
            let payload = {
                title: item,
                status: false,
            }
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "content-type": "application/json" }
            })
                .then((r) => r.json())
                .then((data) => {
                    setTodo([...todo, data])
                })
                .catch((err) => console.log(`err:${err}`))


        }
        else {
            alert("Add Task ")
        }

    }
    React.useEffect(() => {
        getMethod()
    }, [])
    const getMethod = () => {
        fetch("http://localhost:3000/todo")
            .then((r) => r.json())
            .then((data) => {
                setTodo(data)
            })
            .catch((err) => console.log(err))
    }
    const handleToggle = (id, item) => {
        var data = {
            status: !item.status
        }
        fetch(`http://localhost:3000/todo/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((r) => r.json())
            .then((r) => fetch("http://localhost:3000/todo")
                .then((r) => r.json())
                .then((data) => {
                    setTodo(data)
                }))
            .catch((err) => console.log(err))
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/todo/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((r) => r.json())
            .then((r) => fetch("http://localhost:3000/todo")
                .then((r) => r.json())
                .then((data) => {
                    setTodo(data)
                })
            )
            .catch((err) => console.log(err))

    }
    const updateItem = (Updatedone, id) => {
        if (Updatedone) {
            var data = {
                title: Updatedone
            }
            fetch(`http://localhost:3000/todo/${id}`, {
                method: "PATCH",
                body: JSON.stringify(data),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            })
                .then((r) => r.json())
                .then((r) => fetch("http://localhost:3000/todo")
                    .then((r) => r.json())
                    .then((data) => {
                        setTodo(data)
                    }))
                .catch((err) => console.log(err))
        }
        else {
            alert("update value")
            setTodo(todo)
        }
    }
    return (
        <div>
            <TodoInput todo={todo} settodo={setTodo} handleAdd={handleAdd} />
            <div className={styles.parentDiv}>
                {todo.map((item) => { return <TodoList item={item} key={item.id} handleToggle={handleToggle} handleDelete={handleDelete} updateItem={updateItem} /> })}
            </div>
        </div>
    )
}

