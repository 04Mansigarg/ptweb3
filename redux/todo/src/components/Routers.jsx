import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from "./Home"
import { Navbar } from './Navbar'
import { Todo } from './Todo'
import { TodoDetails } from './TodoDetails'
import { TodoEdit } from './TodoEdit'

export const Routers = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="todo" element={<Todo />} />
                <Route path="todo/:id" element={<TodoDetails />} />
                <Route path="todo/:id/edit" element={<TodoEdit />} />
            </Routes>
        </div>
    )
}
