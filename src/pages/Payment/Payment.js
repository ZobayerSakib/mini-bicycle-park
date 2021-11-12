import React from 'react';
import { Link } from 'react-router-dom';
import '../Payment/Payment.css'
const Payment = () => {
    return (
        <div className='paymentTitle mt-5'>
            <h1>Payment System coming soon!</h1>
            <Link to='/dashboard'><button>Go To DashBoard</button></Link>
        </div>
    );
};

export default Payment;