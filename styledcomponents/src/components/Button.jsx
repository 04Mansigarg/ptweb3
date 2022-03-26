
import styled from "styled-components"


const Button = styled.button`
margin:20px;
cursor:pointer;
font-weight:bold;
font-size:larger;
background-color:rgb(14,186,213);
border-radius:5px;
border:2px solid black;
color:white;
&:hover{
    background-color:black;
    color:rgb(14,186,213);
    transition:font-size 4s 2s;

}
@media all and (max-width:600px){
    font-size:10px;
    background-color:coral;
   

    `;


export { Button }

