import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from './Home'
import { Login } from './Login'
import { Navbar } from './Navbar'
import { Product } from './Product'
import { ProductDetail } from './ProductDetail'
import { Register } from './Register'

export const Routers = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="product" element={<Product />} />
                <Route path="register" element={<Register />} />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </div>
    )
}
