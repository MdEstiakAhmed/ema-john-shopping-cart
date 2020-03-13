import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData'
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState(fakeData);
    return (
        <div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 product-container">
                    {
                        products.map(singleProduct => <Product product={singleProduct}></Product>)
                    }
                </div>
                <div className="col-2 cart-container"></div>
            </div>
        </div>
    );
};

export default Shop;