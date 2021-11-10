import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Banner/Banner.css'
const Banner = () => {

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

            <button className='bannerButton mt-1 '>More Items</button>

        </div>
    );
};

export default Banner;