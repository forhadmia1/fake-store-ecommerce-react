import React from 'react';

const Cart = ({cart}) => {
    let quantity= 0;
    let total= 0;
    let shiping = 0;
    for(const product of cart){
        quantity= quantity + product.quantity;
        total= total + (product.price * product.quantity);
        shiping= shiping + (product.shipping * product.quantity);
    }
    const tax = (total *0.1).toFixed(2);
    const grandTotal = (total + shiping + parseFloat(tax)).toFixed(2);


    return (
        <div className='bg-warning order-view ps-2'>
            <h2>Order Review</h2>
            <p>Order Number: {quantity}</p>
            <p>Total Price: {total}</p>
            <p>Shipping: {shiping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;