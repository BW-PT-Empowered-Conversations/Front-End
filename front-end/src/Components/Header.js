import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    background: #424953;
    padding: 1%;
`;

const H2 = styled.h2`
    font-size: 1.4rem;
    text-shadow: 1px 1px 1px white;
    color: green;
`;
//color: #0f4c81;
const A = styled.a`
    color: white;
    padding-top: 2.5%;
    margin-bottom: 0px;
    text-decoration: none;
`;

const Login = styled.button`
width: 100px;
height: 30px;
background: green;
border: solid #c7c5ad 1px;
border-radius: 8px;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
margin-top: 2%;
`;


export default function Header() {
    return (
        <Nav className='header'>
            <H2>Empowered Conversations</H2>
            <A href='/'>Home</A>
            <A href='/signup'>Sign Up</A>
            <A href='/new-conversation'>New Conversation</A>
            <Login><A href='/'>Login</A></Login>
        </Nav>
    );
}
        