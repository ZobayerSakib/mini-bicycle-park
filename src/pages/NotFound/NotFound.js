import React from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../NotFound/NotFound.css'

const NotFound = () => {
    const { loading } = useAuth();
    if (loading) {
        return <div className='loadingStyle'>
            <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <div className='text-center notFound'>
            <h1>404</h1>
            <p>This page wasn't found</p>
            <NavLink className='mt-3' to='/home'><button>Go Back</button></NavLink>
        </div>
    );
};

export default NotFound;