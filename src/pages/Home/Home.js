import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../shared/Footer/Footer';
import Banner from './Banner/Banner';
import News from './News/News';
import Products from './Products/Products';
import Review from './Review/Review';
import '../Home/Home.css'
const Home = () => {
    const { loading } = useAuth();
    if (loading) {
        return <div className='loadingStyle'>
            <Spinner animation="border" variant="info" />
        </div>
    }
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