import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import '../Footer/Footer.css'
const Footer = () => {

    const handleFooterSubscribe = e => {
        e.preventDefault()
    }

    return (
        <div className='footerDesign'>
            <h1>Bicycle Park</h1>
            <h4 className='mt-3 mb-5'>Subscribe Our Newsletter</h4>
            <div className='footerSubscribe'>
                <form onSubmit={handleFooterSubscribe} >
                    <input type="text" name="" id="" placeholder='Email Address' />
                    <button className='footerButton'>Subscribe</button>

                </form>
                <br />
                <br />
                <a href="/facebookLink"><span className='iconDesign'><i className="fa-2x fab fa-facebook-square"></i></span></a>
                <a href="/twitterLink">  <span className='iconDesign' ><i className="fa-2x fab fa-twitter"></i></span></a>
                <a href="/instragramLink"> <span className='iconDesign' ><i className="fa-2x fab fa-instagram-square"></i></span></a>
                <a href="/pinterestLink"><span className='iconDesign' ><i className="fa-2x fab fa-pinterest-square"></i></span></a>
            </div>

            <div className='breadcrumb'>
                <Breadcrumb >
                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/blog">
                        Blog
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/about">
                        About Us
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/contact">
                        Contact Us
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/explore">
                        Product Store
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

        </div>
    );
};

export default Footer;