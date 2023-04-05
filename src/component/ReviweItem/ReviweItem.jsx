import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart ,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "./review.css"
const ReviweItem = ({product,handleRemveFromCart}) => {
    const {id, img, price, name, quantity}=product
    return (
        <div className='review-item'>
           <img src={img} alt="" />
           <div className='review-details'>
            <p className='product-title'>{name}</p>
            <p>Price: <span className='orange-text'>{price}</span></p>
            <p>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button className='btn-delete' onClick={()=>handleRemveFromCart(id)} ><FontAwesomeIcon className='btn-icon' icon={faTrashAlt} /> </button>
        </div>
    );
};

export default ReviweItem;