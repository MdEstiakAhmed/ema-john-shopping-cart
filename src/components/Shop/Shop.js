import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData'
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    function btnCk(product){
        console.log("click", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const [products, setProducts] = useState(fakeData);
    const [cart, setCart] = useState([]);
    return (
        <div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 product-container">
                    {
                        products.map(singleProduct => <Product product={singleProduct} btnCk = {btnCk}></Product>)
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