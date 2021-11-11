import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NotFound/NotFound.css'

const NotFound = () => {
    return (
        <div className='text-center notFound'>
            <h1>404</h1>
            <p>This page wasn't found</p>
            <NavLink className='mt-3' to='/home'><button>Go Back</button></NavLink>
        </div>
    );
};

export default NotFound;