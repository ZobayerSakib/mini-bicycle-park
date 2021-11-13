import React, { useEffect, useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import '../Purchase/Purchase.css'
import Footer from '../shared/Footer/Footer';

const Purchase = () => {
    const { user, loading } = useAuth();
    const { purchaseId } = useParams();
    const [bicycle, setBicycle] = useState([]);
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const numberRef = useRef();
    const postRef = useRef();
    const cityRef = useRef();

    useEffect(() => {
        fetch(`https://shrouded-basin-86219.herokuapp.com/purchase/${purchaseId}`)
            .then(res => res.json())
            .then(data => setBicycle(data))
    }, [])

    const handlePurchaseForm = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const number = numberRef.current.value;
        const postCode = postRef.current.value;
        const city = cityRef.current.value;

        const customerInfo = { name, email, address, number, postCode, city }

        fetch('https://shrouded-basin-86219.herokuapp.com/customers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customerInfo)
        })
            .then(res => res.json())
            .then(data =>
                window.confirm('We are going to confirm your Order.')
            )

        nameRef.current.value = '';
        emailRef.current.value = '';
        addressRef.current.value = '';
        numberRef.current.value = '';
        postRef.current.value = '';
        cityRef.current.value = '';

        e.preventDefault();
    }

    if (loading) {
        return <div className='loadingStyle'>
            <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <>
            <div className='purchasePage'>
                <div className='purchaseDivDesign'>
                    <div className='mx-auto'>
                        <img className='purchaseImg' width='200' height='100' src={bicycle.img} alt="" />
                        <h4>{bicycle.model}</h4>
                        <p >BDT {bicycle.price} </p>
                    </div>
                    <div>
                        <form onSubmit={handlePurchaseForm}>

                            <input defaultValue={user.displayName} ref={nameRef} type="text" placeholder='Name' required />
                            <br />
                            <input defaultValue={user.email} className='mt-2' type="text" ref={emailRef} placeholder='email' required />
                            <br />
                            <input className='mt-2' type="text" placeholder='address' ref={addressRef} required />
                            <br />
                            <input className='mt-2' type="number" placeholder='phone number' ref={numberRef} required />
                            <br />
                            <input className='mt-2' type="number" placeholder='Post Code' ref={postRef} required />
                            <br />
                            <input className='mt-2' type="text" placeholder='City' ref={cityRef} required />
                            <br />
                            <input type="submit" className='mt-2' value="Order Place" />

                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Purchase;