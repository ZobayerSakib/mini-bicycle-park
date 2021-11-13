import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../Header/Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='headerDesign'>
            <div>
                <h1>Bicycle Park</h1>
            </div>
            <div className='headerLink'>
                <NavLink to='/home'>HOME</NavLink>
                <NavLink to='/contact'>CONTACT US</NavLink>

                {
                    user.email &&
                    <NavLink to='/dashboard'>DASHBOARD</NavLink>
                }
                {
                    user.email && <span className='spanDesign'>{user.displayName} </span>
                }
                {
                    user.email ? <button onClick={logOut}> Sign Out </button> :
                        <NavLink to='/login'>LOGIN</NavLink>
                }



            </div>
        </div>
    );
};

export default Header;