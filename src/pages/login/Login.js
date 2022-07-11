import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../../redux/apiCalls";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }

   const handleUsername = (e) => {
        setUsername(e.target.value)
        console.log(username)
    }

   const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

  return (
    <div 
        style={{
            height: '100vh',
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
        }}>
        <input style={{
            padding: '10px',
            marginBottom: '20px'
        }}
            type='text' 
            placeholder='username'
            onChange={ handleUsername }
        />
        <input 
             style={{
                 padding: '10px',
                marginBottom: '20px'
            }}
            type='password' 
            placeholder='password'
            onChange={ handlePassword }
        />
        <button 
            style={{
                padding: '10px',
                marginBottom: '20px',
                width: '100px'
            }}
            onClick={handleClick}
        >Login
        </button>
    </div>
  )
}

export default Login