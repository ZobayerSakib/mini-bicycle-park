import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import Products from '../Home/Products/Products';
import '../Purchase/Purchase.css'
import Footer from '../shared/Footer/Footer';
const Purchase = () => {
    const { user } = useAuth();
    const { purchaseId } = useParams();
    const [bicycle, setBicycle] = useState([]);
    // const { nameRef } = useRef()

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${purchaseId}`)
            .then(res => res.json())
            .then(data => setBicycle(data))
    }, [])

    const handlePurchaseForm = e => {



        e.preventDefault();
    }

    return (
        <>
            <div className='purchasePage'>
                <div className='purchaseDivDesign'>
                    <div className='mx-auto'>
                        <img className='purchaseImg' width='200' height='100' src={bicycle.img} alt="" />
                        <h4>{bicycle.model}</h4>
                        <p>BDT {bicycle.price} </p>
                    </div>
                    <div>
                        <form onSubmit={handlePurchaseForm}>

                            <input defaultValue={user.displayName} type="text" />
                            <br />
                            <input defaultValue={user.email} className='mt-2' type="text" />
                            <br />
                            <input className='mt-2' type="text" placeholder='address' />
                            <br />
                            <input className='mt-2' type="number" placeholder='phone number' />
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