import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
    const loginAuth = useSelector(state => state.loginAuth)
    return (loginAuth ? children : <Navigate to="/login" />
    )
}
