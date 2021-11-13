import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Login/Login.css'
import Footer from '../shared/Footer/Footer';
const Login = () => {

    const { error, signInWithEmail, signInWithGoogle, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/dashboard';
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


    if (loading) {
        return <div className='loadingStyle'>
            <Spinner animation="border" variant="info" />
        </div>
    }

    return (
        <div className=' loginDiv'>
            <div className='loginForm p-5'>
                <h2>Login Form</h2>
                <form onSubmit={loginFormHandler} className='loginFormDesign'>
                    <input className='mt-2' type="email" onBlur={emailHandler} placeholder='email' required />
                    <br />
                    <input className='mt-2' type="password" onBlur={passwordHandler} placeholder='password' required />
                    <br />
                    <input className='mt-2' type="submit" value="Sign In" />
                </form>
                <p>{error}</p>
                <p>Are you a new User? <Link to='/register' >Register</Link></p>
                <p>-------------------Or----------------</p>
                <button onClick={googleLoginSystemHandler}><span><i className="fab fa-google"></i></span> Sign In With Google</button>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;