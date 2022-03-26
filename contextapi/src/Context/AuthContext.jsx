import React, { createContext } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false)
    const [token, setToken] = React.useState(null)

    const login = (token) => {
        setIsAuth(true)
        setToken(token)

    }
    const logout = () => {
        setIsAuth(false)
    }
    const value = { isAuth, login, token, setToken, logout }
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}
