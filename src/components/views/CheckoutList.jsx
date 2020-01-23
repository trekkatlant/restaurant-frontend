import React from 'react';
import '../styles/Checkout.css';

function CheckoutList(props) {
    console.log('CARTLISTPROPS',props);
    return (
	<div className="item-line">
	  <p>{props.cartItem.item} <span>Quantity: {props.quantity}</span></p>
	</div>
    );
}

export default CheckoutList;
