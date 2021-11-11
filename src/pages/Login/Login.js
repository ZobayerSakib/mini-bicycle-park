import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Login/Login.css'
const Login = () => {

    const { signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const googleLoginSystemHandler = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_uri)

            })
    }


    const loginFormHandler = e => {
        alert('Depression')
        e.preventDefault();
    }



    return (
        <div className=' loginDiv'>
            <div className='loginForm p-5'>
                <h2>Login Form</h2>
                <form onSubmit={loginFormHandler}>
                    <input className='mt-2' type="email" name='email' placeholder='email' required />
                    <br />
                    <input className='mt-2' type="password" name='password' placeholder='password' required />
                    <br />
                    <input className='mt-2' type="submit" value="Sign In" />
                </form>

                <p>Are a new User? <Link to='/register' >Register</Link></p>
                <p>-------------------Or----------------</p>
                <button onClick={googleLoginSystemHandler}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;