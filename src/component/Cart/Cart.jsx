import React from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart ,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = ( {cart, handleClearCart, children}) => { 
    // const {cart} = props
    let totalPrice = 0  
    let totalShipping = 0 
    let  quantity = 0    
    for(const product of cart ){
     totalPrice =totalPrice +product.price
     totalShipping =totalShipping +product.shipping
     quantity =  quantity + product.quantity
    } 
    const tax = totalPrice*7/100 
    const grandTotal= totalPrice+totalShipping+tax
    
    return (
        <div className='cart'>
                 <h4>Order Summary</h4>
        <p>Selected Item: {quantity}</p>
        <p>Total Price: ${totalPrice} </p>
        <p>Total Shipping: ${totalShipping} </p>
        <p>Tax: ${tax.toFixed(2)} </p> 
        <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        <button className='btn-clear-cart ' onClick={handleClearCart}>
            Clear Cart
            <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        {children}
        </div>
    );
};

export default Cart;