import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Dashboard/Dashboard.css'
import Footer from '../shared/Footer/Footer';

const Dashboard = () => {
    const { logOut, user } = useAuth();
    return (
        <div className='text-center mt-5 '>
            <div className='dashboard '>
                <div className='dashboardAside mb-5 '>
                    <h2>Dashboard</h2>
                    <hr />
                    <Link to='/payment'><button>Payment</button></Link>
                    <br />
                    <Link to='/myOrders'><button>My Orders</button></Link>
                    <br />
                    <Link to='/addReview'><button>Review</button></Link>
                    <br />
                    <Link to='/manageOrders'><button>Manage all Orders</button></Link>
                    <br />
                    <Link to='/addProducts'><button>Add a Product</button></Link>
                    <br />
                    <Link to='/manageProducts'><button>Manage Product</button></Link>
                    <br />
                    <Link to='/makeAdmin'><button>Make Admin</button></Link>
                    <br />
                    <button onClick={logOut}>LogOut</button>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;