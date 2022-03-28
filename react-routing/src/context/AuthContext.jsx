import React, { createContext } from 'react'
export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setAuth] = React.useState(false)
    const [token, setToken] = React.useState(null)

    const login = (token) => {
        setAuth(true)
        setToken(token)


    }
    const logout = () => {
        setAuth(false)
    }

    const value = { token, isAuth, login, logout, setToken }
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
}
