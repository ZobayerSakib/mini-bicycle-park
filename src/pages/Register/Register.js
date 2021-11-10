import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInWithGoogle } = useAuth()
    return (
        <div>
            <h2>Register Form</h2>
            <form>
                <input type="email" placeholder='email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Register" />
            </form>

            <p>Have you already an account? <Link to='/login' >Login</Link></p>
            <p>-------------------Or--------------</p>
            <button onClick={signInWithGoogle}>Sign In With Google</button>

        </div>
    );
};

export default Register;