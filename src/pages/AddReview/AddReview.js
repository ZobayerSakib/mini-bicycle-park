import React, { useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import '../AddReview/AddReview.css'
import Footer from '../shared/Footer/Footer';

const AddReview = () => {

    const { user } = useAuth();
    // const [users, setUsers] = useState([]);
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
            <h2>Post Your Review</h2>
            <form onSubmit={reviewSubmitHandler} className='reviewForm'>
                <input type="text" defaultValue={user.displayName} ref={nameRef} />
                <br /><br />
                <input type="email" defaultValue={user.email} ref={emailRef} />
                <br /><br />
                <textarea name="" id="" cols="20" rows="5" placeholder='write comment' ref={commentRef}></textarea>
                <br /><br />
                <input className='inputSubmit' type="submit" value="POST" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddReview;