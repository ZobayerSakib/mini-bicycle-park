import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
    return (
        <div className='mt-5 mb-5'>
            <h2>Login Form</h2>
            <form>
                <input type="email" placeholder='email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Sign In" />
            </form>

            <p>Are a new User? <Link to='/register' >Register</Link></p>
            <p>-------------------Or----------------</p>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    );
};

export default Login;