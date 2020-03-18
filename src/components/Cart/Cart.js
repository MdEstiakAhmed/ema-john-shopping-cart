import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    console.log(cart);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const item = cart[i];
        total = (total + (item.price * item.cartQuantity)).toFixed(2);    //toFixed() make a number string
        // debugger;
        total = Number(total);  //Number make a string into number
        console.log(`${total} + ${item.price} * ${item.cartQuantity}`);
    }
    return (
        <div className = "cart-div">
            <h4>order summery</h4>
            <p>total items: {cart.length}</p>
            <p>total price: {total}</p>
            <Link to = "/orderReview">
                <button  className="btn btn-success">order review</button>
            </Link>
            
        </div>
    );
};

export default Cart;