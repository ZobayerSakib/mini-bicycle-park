import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../Products/Products.css'

const Products = () => {
    const { bikes } = useAuth()


    return (
        <>
            <div >
                <h3 className='mt-5 text-center mb-5'>PRODUCTS</h3>
                <div className='productDiv'>
                    <div className='gridNeed' >
                        {
                            bikes.map(bike => <div className={{ margin: '20px' }}
                                key={bike._id}
                            >
                                <img width='100%' height='300' src={bike.img} alt="" />
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

// https://ibb.co/9cKyPcD

// https://ibb.co/d7xz68v

// https://ibb.co/PNKT4qB

// https://ibb.co/pn7dWHj

// https://ibb.co/BNjV3z0

// https://ibb.co/3pLSpd8











  // const fake = [
    //     { model: 'Taiwan Carbon Bicycle', img: 'https://i.ibb.co/25HfPGr/bicycle5.jpg', info: 'The new taiwan carbon bike frames, lightweight and easy to carry. Made of high quality cnc machined aluminum, the frame is carbon steel with strong toughness, lightweight and durable.', price: '13000' },


    //     { model: 'Nepal HDT 10', img: 'https://i.ibb.co/mGkvtfQ/bicycle4.jpg', info: 'Nepal HDT 10 bike frames, lightweight and easy to carry. Made of high quality cnc machined aluminum, the frame is carbon steel with strong toughness, lightweight and durable.', price: '11000' },


    //     { model: 'Hercules 910X', img: 'https://i.ibb.co/6NMFvK0/bicycle3.jpg', info: 'Cycling is one of the best exercises. You can cycle across scenic landscapes, enjoy the sceneries, and also become fit. So, when you choose cycling over other workouts to stay healthy, you also give yourself various other benefits.', price: '15000' },


    //     { model: 'Mercedes Real Hero', img: 'https://i.ibb.co/Mc3PcSj/bicycle1.jpg', info: 'Mercedes Real Hero bicycle frames, lightweight and easy to carry. Made of high quality cnc machined aluminum, the frame is carbon steel with strong toughness, lightweight and durable.', price: '23000' },


    //     { model: 'Cool Boy Toy', img: 'https://i.ibb.co/6BbRwnj/bicycle2.jpg', info: 'Funny toys, exquisite series: The mini bicycles, wheels, pedals, armrests and supports of the simulation design can be moved like a real bicycle. Children like it as a fantasy toy. It is also the perfect choice for an exquisite collection or home decoration.', price: '1100' },

    //     { model: 'Xmazri 1LZ', img: 'https://i.ibb.co/q7qm67S/bicycle6.jpg', info: 'Xmazri 1Lz Models, lightweight and easy to carry. Made of high quality cnc machined aluminum, the frame is carbon steel with strong toughness, lightweight and durable.', price: '8000' }



    // ]