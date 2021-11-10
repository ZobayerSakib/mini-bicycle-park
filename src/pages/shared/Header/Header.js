import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'
const Header = () => {

    return (
        <div className='headerDesign'>
            <div>
                <h1>Bicycle Park</h1>
            </div>
            <div className='headerLink'>
                <NavLink to='/home'>HOME</NavLink>
                <NavLink to='/contact'>CONTACT US</NavLink>

                <button > Sign Out </button> :
                <NavLink to='/login'>LOGIN</NavLink>









            </div>
        </div>
    );
};

export default Header;