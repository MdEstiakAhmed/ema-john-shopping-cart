import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const item = cart[i];
        total = (total + item.price).toFixed(2);    //toFixed() make a number string
        total = Number(total);  //Number make a string into number
    }
    return (
        <div className = "cart-div">
            <h4>order summery</h4>
            <p>total items: {cart.length}</p>
            <p>total price: {total}</p>
        </div>
    );
};

export default Cart;