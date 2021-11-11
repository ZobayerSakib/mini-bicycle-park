import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Register/Register.css'
const Register = () => {
    const { signInWithGoogle } = useAuth();

    const registerFormHandler = e => {

        console.log('value added')
        e.preventDefault();
    }


    return (
        <div className=' registerDiv'>
            <div className='registerForm p-5'>
                <h2>Register Form</h2>
                <form onSubmit={registerFormHandler}>
                    <input className='mt-2' name='email' type="email" placeholder='email' />
                    <br />
                    <input className='mt-2' name='password' type="password" placeholder='password' />
                    <br />
                    <input className='mt-2' type="submit" value="Register" />
                </form>

                <p>Are a new User? <Link to='/login' >Login</Link></p>
                <p>-------------------Or----------------</p>
                <button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Register;