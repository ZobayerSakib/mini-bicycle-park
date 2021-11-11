import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Login/Login.css'
import Footer from '../shared/Footer/Footer';
const Login = () => {

    const { error, signInWithEmail, signInWithGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const googleLoginSystemHandler = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_uri)

            })
    }
    const emailHandler = e => {
        setEmail(e.target.value);
    }
    const passwordHandler = e => {
        setPassword(e.target.value);

    }

    const loginFormHandler = e => {
        signInWithEmail(email, password);
        e.preventDefault();
    }



    return (
        <div className=' loginDiv'>
            <div className='loginForm p-5'>
                <h2>Login Form</h2>
                <form onSubmit={loginFormHandler}>
                    <input className='mt-2' type="email" onBlur={emailHandler} placeholder='email' required />
                    <br />
                    <input className='mt-2' type="password" onBlur={passwordHandler} placeholder='password' required />
                    <br />
                    <input className='mt-2' type="submit" value="Sign In" />
                </form>
                <p>{error}</p>
                <p>Are a new User? <Link to='/register' >Register</Link></p>
                <p>-------------------Or----------------</p>
                <button onClick={googleLoginSystemHandler}>Sign In With Google</button>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;