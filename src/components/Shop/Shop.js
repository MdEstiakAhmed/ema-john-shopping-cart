import React, { useEffect } from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData'
import './Shop.css';
import Cart from '../Cart/Cart';
import { getDatabaseCart, addToDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


import { useState } from 'react';



const Shop = () => {
    const [products, setProducts] = useState(fakeData);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const cartProductKey = Object.keys(savedCart);
        
        const cartProduct = cartProductKey.map(key =>{
            const products = fakeData.find(product => product.key === key);
            products.cartQuantity = savedCart[key];
            products.sendingStatus = "order";
            return products;
        })
    setCart(cartProduct);
    }, [])

    function btnCk(product){
        const newCart = [...cart, product];
        console.log(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);   //this variable differ from different value. it work like closure
        // console.log(sameProduct.quantity);
        const count = sameProduct.length;
        product.sendingStatus = "shop";
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 product-container">
                    {
                        products.map(singleProduct => <Product product={singleProduct} key={singleProduct.key} btnCk = {btnCk}></Product>)
                    }
                </div>
                <div className="col-2 cart-container">
                    <Cart cart={cart}>
                    <Link to = "/orderReview">
                        <button  className="btn btn-success">order review</button>
                    </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;