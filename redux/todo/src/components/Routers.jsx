import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from "./Home"
import { Navbar } from './Navbar'
import { Todo } from './Todo'
import { TodoDetails } from './TodoDetails'

export const Routers = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="todo" element={<Todo />} />
                <Route path="todo/:id" element={<TodoDetails />} />
            </Routes>
        </div>
    )
}
