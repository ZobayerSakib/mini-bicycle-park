import React, { useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import '../AddReview/AddReview.css'
import Footer from '../shared/Footer/Footer';

const AddReview = () => {

    const { user } = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const commentRef = useRef()


    const reviewSubmitHandler = e => {
        const comment = commentRef.current.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;


        const newUser = { comment, name, email };

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        e.preventDefault();
    }

    return (
        <div className='reviewSection'>
            <h2>Add a Comment</h2>
            <form onSubmit={reviewSubmitHandler} className='reviewForm'>
                <input type="text" defaultValue={user.displayName} ref={nameRef} required />
                <br /><br />
                <input type="email" defaultValue={user.email} ref={emailRef} required />
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