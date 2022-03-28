import React, { createContext } from 'react'
export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setAuth] = React.useState(false)
    const [token, setToken] = React.useState()

    const login = (token) => {
        setAuth(true)
        setToken(token)
        console.log(token)

    }
    const logout = () => {
        setAuth(false)
    }

    const value = { token, isAuth, login, logout }
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
}
