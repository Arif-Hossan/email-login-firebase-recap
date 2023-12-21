import React, { useState } from 'react';
import { Form } from 'react-router-dom';

const Register = () => {
    const [name,setName] = useState('');
    const [pass, setPass] = useState('');
    const handleName = (event) =>{
        const name = event.target.value;
        // console.log(name);
        setName(name);

    }
    const handlePassword = (e) =>{
        const pass = e.target.value;
        // console.log(pass);
        setPass(pass);
    }
    const handleSubmit = e => {
        console.log(name,pass);
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Registration</h2>
            <Form onSubmit={handleSubmit}>
                <input type="email" onBlur={handleName} placeholder='Email' required/><br></br><br></br>
                <input type="password" onChange={handlePassword} placeholder='password' /><br></br><br></br>
                <button type="submit">Register</button>
            </Form>
        </div>
    );
};

export default Register;