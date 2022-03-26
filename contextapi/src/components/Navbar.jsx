import React, { useContext } from 'react'
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
const Input = styled.input`
width: 50%;
margin: 10px;
margin-left: 20%;
padding: 10px 10px 10px;
`
const Submit = styled.input`
margin: 10px;
margin-left:32%;
  padding: 10px 10px 10px;
  width: 120px;
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
`
const Form = styled.form`
width:30%;
margin:auto;
background-color:black`

export const Navbar = () => {
    const [formData, setFormData] = React.useState({ email: "", password: "" })
    const { email, password } = formData
    const { login } = useContext(AuthContext)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const handleChange = (e) => {
        let { name, value } = e.currentTarget

        setFormData({
            ...formData,
            [name]: value
        })

    }
    const submitUserInfo = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch("https://reqres.in/api/login", {

            method: "POST",
            body: JSON.stringify(formData),
            headers: { "content-type": "application/json" }
        })
            .then((res) => res.json())
            .then((res) => login(res.token))
            .catch((err) => setError(true))
            .finally(() => setLoading(false))

    }

    return loading ? <h1>Loading...</h1> : error ? <h1>error...</h1> : (
        <div>
            <Nav>
                <Button>Login</Button>
                <Button>LogOut</Button>
            </Nav>
            <div>
                <MainHeading className='heading'>User Login</MainHeading>
                <Form className='form' onSubmit={submitUserInfo}>
                    <Input className='Input' type="email" name="email" placeholder='Enter Your Email' value={email} onChange={handleChange} />
                    <br />
                    <Input className='Input' type="password" name="password" placeholder='Enter Your Password' value={password} onChange={handleChange} />
                    <br />
                    <Submit className='button' type="submit" value="Submit" />
                </Form>
            </div>
        </div>
    )
}
