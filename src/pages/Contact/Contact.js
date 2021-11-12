import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import '../Contact/Contact.css'
import Footer from '../shared/Footer/Footer';
const Contact = () => {

    const { loading } = useAuth();
    if (loading) {
        return <div className='loadingStyle'>
            <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <div>

            <div className='contactFileImg'>
                <img src='https://i.ibb.co/Xx8shW0/p07phq4b.jpg' alt="" />
            </div>
            <div className='contactInfo'>
                <div className='officeInfo'>
                    <h5>HEAD OFFICE</h5>
                    <p>BICYCLE PARK Center,</p>
                    <p>105 Middle Badda,</p>
                    <p>Dhaka-1212.</p>
                    <p>Phone : 09613737777</p>
                    <p>Toll Free : +88007777777</p>

                    <br /><br /><br />
                    <h5>FOR GLOBAL PARTNERS AFFILIATION</h5>
                    <p>Mr. ZOBAYER HOSSAIN SAKIB</p>
                    <p>Deputy Manager</p>
                    <p>Bicycle Park (EXPORT)</p>
                    <p>Contact : +8801844875</p>
                    <p>Contact : +880288193875</p>
                    <p>Fax: +88-02-8819117</p>
                    <p>Email: export75@bicyclepark.bd.com</p>
                    <p>Skype: bicyclePark075</p>
                </div>

                <div className='queryInfo mt-4'>
                    <h2>SEND YOUR QUERY</h2>
                    <input type="text" placeholder='Your Name' />
                    <br /><br />
                    <input type="text" placeholder='Your Address' />
                    <br /><br />
                    <input type="text" placeholder='Your Email' />
                    <br /><br />
                    <input type="number" placeholder='Your Mobile' />

                    <br /><br />
                    <div>
                        <input type="submit" value="SEND" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;