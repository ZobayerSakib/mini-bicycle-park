import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Register/Register.css'
import Footer from '../shared/Footer/Footer';
const Register = () => {
    const { error, registerWithEmail, signInWithGoogle, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleEmailChange = e => {

        setEmail(e.target.value)

    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);

    }
    const registerFormHandler = e => {
        e.preventDefault();
        registerWithEmail(email, password);
        alert('Registration has Successfully Done!')
        e.target.value = '';
    }

    if (loading) {
        return <div className='loadingStyle'>
            <Spinner animation="border" variant="info" />
        </div>
    }

    return (
        <div className=' registerDiv'>
            <div className='registerForm p-5'>
                <h2>Register Form</h2>
                <form onSubmit={registerFormHandler} className='registerFormDesign'>

                    <input className='mt-2' onBlur={handleEmailChange} type="email" placeholder='email' required />
                    <br />
                    <input className='mt-2' onBlur={handlePasswordChange} type="password" placeholder='password' required />
                    <br />
                    <input className='mt-2' type="submit" value="Register" />
                </form>

                <p>{error}</p>

                <p>Are you a new User? <Link to='/login' >Login</Link></p>
                <p>-------------------Or----------------</p>
                <button onClick={signInWithGoogle}><span><i className="fab fa-google"></i></span> Sign In With Google</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;