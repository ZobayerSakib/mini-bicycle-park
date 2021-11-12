import React from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../Banner/Banner.css'
const Banner = () => {
    const { loading } = useAuth();
    if (loading) {
        return <div className='loadingStyle'>
            <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/cxBz8Ky/banner-1.jpg"
                        alt="First slide"
                        height="700"

                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/bJNzmKn/banner-2.jpg"
                        alt="Second slide"
                        height="700"

                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/JjkCVyf/banner-3.jpg"
                        alt="Third slide"
                        height="700"

                    />

                </Carousel.Item>

            </Carousel>

            <Link to='/explore'><button className='bannerButton mt-1 '>More Items</button></Link>

        </div>
    );
};

export default Banner;