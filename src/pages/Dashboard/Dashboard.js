import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Dashboard/Dashboard.css'
import Footer from '../shared/Footer/Footer';

const Dashboard = () => {
    const { admin, logOut, loading } = useAuth();
    if (loading) {
        return <div className='loadingStyle'>
            <Spinner animation="border" variant="info" />
        </div>
    }

    return (
        <>
            <div className='text-center mt-5 '>
                <div className='dashboard '>
                    <div className='dashboard mb-5 '>
                        <div className='dashboardTitle'>
                            <h2>Dashboard</h2>
                        </div>

                        {
                            !admin && <div>

                                <Link to='/payment'><button>Payment</button></Link>
                                <br />
                                <Link to='/myOrders'><button>My Orders</button></Link>
                                <br />
                                <Link to='/addReview'><button>Review</button></Link>
                                <br />
                                <button onClick={logOut}>LogOut</button>
                            </div>
                        }
                        {
                            admin && <div>
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
                        }



                    </div>

                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Dashboard;