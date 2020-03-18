import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData'
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    function btnCk(product){
        const newCart = [...cart, product];
        console.log(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);   //this variable differ from different value. it work like closure
        // console.log(sameProduct.quantity);
        const count = sameProduct.length;
        product.cartQuantity = count;
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    const [products, setProducts] = useState(fakeData);
    const [cart, setCart] = useState([]);
    // console.log(cart);
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;