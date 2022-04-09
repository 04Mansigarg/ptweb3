import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Employee } from '../components/Employee'
import { EmployeeCreate } from '../components/EmployeeCreate'
import { EmployeeDetails } from '../components/EmployeeDetails'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { Navbar } from '../components/Navbar'
import { PrivateRoutes } from './PrivateRoute'

export const Routers = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoutes> <Home /></PrivateRoutes>} />
        <Route path="employee" element={<PrivateRoutes> <Employee /></PrivateRoutes>} />
        <Route path="employee/create" element={<PrivateRoutes> <EmployeeCreate /></PrivateRoutes>} />
        <Route path="register" element={<Register />} />
        <Route path="employee/:id" element={<PrivateRoutes> <EmployeeDetails /></PrivateRoutes>} />
        <Route path="login" element={<Login />} />

      </Routes>
    </div>
  )
}
