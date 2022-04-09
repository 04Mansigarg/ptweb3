import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
    const { isAuth } = React.useContext(AuthContext)
    return isAuth ? children : <Navigate to="/login" />
}
