import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviweItem from '../ReviweItem/ReviweItem';
import './Oder.css'
import { removeFromDb } from '../../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData()

    const[cart ,setCart] = useState(savedCart)

    const handleRemveFromCart= (id) =>{
        const remaning = cart.filter(product => product.id !== id )
      setCart(remaning)
      removeFromDb(id)

    }
  
    return (
        <div className='shop-container'>
            <div className='review-container'>
            {
                cart.map(product=><ReviweItem 
                
                     key={product.key}
                    product={product}
                    handleRemveFromCart={handleRemveFromCart}
                >

                </ReviweItem>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Order;