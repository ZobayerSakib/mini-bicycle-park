import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Dashboard/Dashboard.css'
import Payment from '../Payment/Payment';
import Footer from '../shared/Footer/Footer';

const Dashboard = () => {
    const { logOut } = useAuth();
    return (
        <div className='text-center mt-5 '>
            <div className='dashboard '>
                <div className='dashboardAside mb-5 '>
                    <h2>Dashboard</h2>
                    <hr />
                    <Link to='/payment'><button>Payment</button></Link>
                    <br />
                    <Link to='/payment'><button>My Orders</button></Link>
                    <br />
                    <Link to='/addReview'><button>Review</button></Link>
                    <br />
                    <button onClick={logOut}>LogOut</button>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;