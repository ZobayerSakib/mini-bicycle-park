import React, { useRef } from 'react';
import Footer from '../shared/Footer/Footer';
import '../AddProducts/AddProducts.css'
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
const AddProducts = () => {
    const { loading } = useAuth();
    const imgRef = useRef();
    const modelRef = useRef();
    const infoRef = useRef();
    const priceRef = useRef();

    if (loading) {
        return <div className='loadingStyle'>
            <Spinner animation="border" variant="info" />
        </div>
    }

    const productAddHandling = e => {
        const img = imgRef.current.value;
        const model = modelRef.current.value;
        const info = infoRef.current.value;
        const price = priceRef.current.value;

        const newProduct = { img, model, info, price }

        fetch('https://shrouded-basin-86219.herokuapp.com/bikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data =>
                alert('Hey, Your new Product added successfully!')
            )
        imgRef.current.value = '';
        modelRef.current.value = '';
        infoRef.current.value = '';
        priceRef.current.value = '';

        e.preventDefault();
    }
    return (
        <div className='addNewProductDiv'>
            <h2>Add a Product</h2>
            <div>
                <form onSubmit={productAddHandling} className='addNewProductForm'>
                    <input type="img" placeholder='Img URL' ref={imgRef} required />
                    <br /><br />
                    <input type="text" placeholder='Model Name' ref={modelRef} required />
                    <br /><br />
                    <textarea name="" id="" cols="30" rows="5" ref={infoRef} placeholder='write product details' required></textarea><br /><br />
                    <input type="number" placeholder='Model Price' ref={priceRef} required />
                    <br /><br />
                    <input type="submit" value="Add Product" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProducts;