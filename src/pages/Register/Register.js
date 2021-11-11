import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Register/Register.css'
const Register = () => {
    const { error, registerWithEmail, signInWithGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => {

        setEmail(e.target.value)

    }
    const handlePasswordChange = e => {
        // registerWithEmail(e.target.value)
        setPassword(e.target.value);

    }
    const registerFormHandler = e => {
        e.preventDefault();
        registerWithEmail(email, password);
        if (password.length < 6) {
            console.log('Six character needed for register')
            return;
        }
        console.log(email, password);

    }


    return (
        <div className=' registerDiv'>
            <div className='registerForm p-5'>
                <h2>Register Form</h2>
                <form onSubmit={registerFormHandler}>
                    <input className='mt-2' onBlur={handleEmailChange} type="email" placeholder='email' />
                    <br />
                    <input className='mt-2' onBlur={handlePasswordChange} type="password" placeholder='password' />
                    <br />
                    <input className='mt-2' type="submit" value="Register" />
                </form>

                <p>Error:{error}</p>

                <p>Are you a new User? <Link to='/login' >Login</Link></p>
                <p>-------------------Or----------------</p>
                <button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Register;