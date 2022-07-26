import styled, { createGlobalStyle } from "styled-components";

 const RegisterContainer = styled.div`
margin-top:5rem;
padding-top:0.5rem;
width:30%;
height:30rem;
text-align: center;
align-self:center;
background-color: #4C6769;
color:white;
border-radius:2rem;
box-shadow: 5px 10px #ACBFC2;
`;
const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap');


*{
    font-family: 'Oxygen', sans-serif;
}


`;

export {RegisterContainer,Global}