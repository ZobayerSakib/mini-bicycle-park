import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Dashboard/Dashboard.css'
import Payment from '../Payment/Payment';

const Dashboard = () => {
    const { logOut } = useAuth();
    return (
        <div className='text-center mt-5 mb-5'>
            <div className='dashboard'>
                <div className='dashboardAside'>
                    <h2>Dashboard</h2>
                    <hr />
                    <Link to='/payment'><button>Payment</button></Link>
                    <br />
                    <Link to='/payment'><button>My Orders</button></Link>
                    <br />
                    <Link to='/payment'><button>Review</button></Link>
                    <br />
                    <button onClick={logOut}>LogOut</button>

                </div>
                <div className='dashboardInfo'>
                    {/* <h2>Data Loading Site</h2> */}
                    <Payment></Payment>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;