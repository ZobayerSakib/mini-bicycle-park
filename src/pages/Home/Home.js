import React from 'react';
import Footer from '../shared/Footer/Footer';
import Banner from './Banner/Banner';
import News from './News/News';
import Products from './Products/Products';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default Home;