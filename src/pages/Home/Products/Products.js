import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../Products/Products.css'

const Products = () => {
    const { products } = useAuth();

    return (
        <>
            <div >
                <h3 className='mt-5 text-center mb-5'>PRODUCTS</h3>
                <div className='productDiv'>
                    <div className='bikesDesign' >

                        {
                            products.map(bike => <div className={{ margin: '20px' }}
                                key={bike._id}
                            >
                                <img src={bike.img} alt="" />
                                <h5 className='mt-3'>{bike.model}</h5>
                                <p className='mt-2'>{bike.info}</p>
                                <p className='mt-1'>BDT {bike.price}</p>
                                <NavLink to={`purchase/${bike._id}`}><button>Purchase Now</button></NavLink>

                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
