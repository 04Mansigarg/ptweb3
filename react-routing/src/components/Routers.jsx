import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Payment } from '../Ashu/Payment'
import { Home } from './Home'
import { Login } from './Login'
import { Navbar } from './Navbar'
import { PrivateRoutes } from './PrivateRoutes'
import { Product } from './Product'
import { ProductDetail } from './ProductDetail'
import { Register } from './Register'

export const Routers = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<PrivateRoutes> <Home /></PrivateRoutes>} />
                <Route path="product" element={<PrivateRoutes> <Product /></PrivateRoutes>} />
                <Route path="register" element={<Register />} />
                <Route path="product/:id" element={<PrivateRoutes> <ProductDetail /></PrivateRoutes>} />
                <Route path="login" element={<Login />} />
                <Route path="payment" element={<Payment />} />
            </Routes>
        </div>
    )
}
