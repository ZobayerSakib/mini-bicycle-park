import React from 'react';
import useAuth from '../../../hooks/useAuth';
import '../Explore/Explore.css'
const Explore = () => {
    const { products } = useAuth()
    return (
        <div className='itemDiv'>
            <div className='mt-5 mb-5 itemTitle'>
                <h1>All Items For Our Customers</h1>
            </div>
            <div className='itemDesign'>
                {
                    products.map(item => <div
                        key={item._id}
                    >
                        <img src={item.img} alt="" />
                        <h4 className='mt-3'>Model Name: {item.model}</h4>
                        <p className='mt-2'><b><u>Details:</u> </b>{item.info}</p>
                        <h5><b>Bicycle Price: </b>{item.price}</h5>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Explore;