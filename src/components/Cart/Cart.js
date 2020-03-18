import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    console.log(cart);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const item = cart[i];
        if(item.sendingStatus === "shop"){
            total = (total + (item.price)).toFixed(2);    //toFixed() make a number string
        }
        else{
            total = (total + (item.price * item.cartQuantity)).toFixed(2);
        }
        total = Number(total);  //Number make a string into number
        console.log(`${total} + ${item.price} * ${item.cartQuantity}`);
    }
    return (
        <div className = "cart-div">
            <h4>order summery</h4>
            <p>total items: {cart.length}</p>
            <p>total price: {total}</p>
            {props.children}
        </div>
    );
};

export default Cart;