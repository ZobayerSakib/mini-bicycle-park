import React, { useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import '../AddReview/AddReview.css'
import Footer from '../shared/Footer/Footer';

const AddReview = () => {

    const { user } = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const ratingRef = useRef();
    const commentRef = useRef()
    const { loading } = useAuth();
    if (loading) {
        return <div className='loadingStyle'>
            <Spinner animation="border" variant="info" />
        </div>
    }

    const reviewSubmitHandler = e => {
        const comment = commentRef.current.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const rating = ratingRef.current.value;

        const newUser = { comment, name, email, rating };

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data =>
                alert('Congratulation!.Comment added successfully')
            )

        commentRef.current.value = '';
        nameRef.current.value = '';
        emailRef.current.value = '';
        ratingRef.current.value = '';

        // I love this platform. I have bought 3 bicycle from this platform and their online and offline both services and their products are awesome. Thanks!



        e.preventDefault();
    }

    return (
        <div className='reviewSection'>
            <h2>Add a Comment</h2>
            <form onSubmit={reviewSubmitHandler} className='reviewForm'>
                <input type="text" defaultValue={user.displayName} ref={nameRef} placeholder='name' required />
                <br /><br />
                <input type="email" defaultValue={user.email} ref={emailRef} required />
                <input type="text" ref={ratingRef} required placeholder='Give us Rating' />
                <br /><br />
                <textarea name="" id="" cols="20" rows="5" placeholder='write comment' ref={commentRef} required></textarea>
                <br /><br />
                <input className='inputSubmit' type="submit" value="POST COMMENT" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddReview;