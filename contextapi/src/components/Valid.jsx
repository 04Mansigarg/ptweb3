import React from 'react'
import styled from "styled-components"
import { AuthContext } from '../Context/AuthContext';

const Nav = styled.div`
height: 4em;
  background-color: black;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
margin: 10px;
  padding: 10px 10px 10px;
  width: 100px;
  cursor: pointer;
  font-weight: bold;
  background-color: rgb(14, 186, 213);
  border-radius: 5px;
  border: 2px solid white;
  color: white;
  &:hover{
    background-color:white;
    color:rgb(14,186,213);
    transition:font-size 4s 2s;
  }
`;
const MainHeading = styled.h1`
color: rgb(14, 186, 213);
font-size: 3em;
font-weight: 650;
text-align: center;
`

export const Valid = () => {
    const { token, logout } = React.useContext(AuthContext)
    const handleLogout = () => {
        logout()

    }
    return (
        <div>
            <Nav>
                <Button onClick={handleLogout} >LogOut</Button>
            </Nav>
            <div>
                <MainHeading> Token:{token}</MainHeading>
            </div>
        </div>
    )
}
