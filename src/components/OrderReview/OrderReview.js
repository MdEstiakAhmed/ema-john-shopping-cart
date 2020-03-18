import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import OrderReviewItem from '../OrderReviewItem/OrderReviewItem';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    const [cart, setCart] = useState([]);
    let count = 0;
    const savedCart = getDatabaseCart();
    const totalCart = Object.values(savedCart);
    for(let i = 0; i < totalCart.length; i++){
        count = count + totalCart[i];
    }

    const removeCartItem = (productKey) =>{
        console.log("click:", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const cartProductKey = Object.keys(savedCart);
        
        const cartProduct = cartProductKey.map(key =>{
            const products = fakeData.find(product => product.key === key);
            products.cartQuantity = savedCart[key];
            return products;
        })
    setCart(cartProduct);
    },[])
    
    return (
        <div>
            <h1>this is order review section {count}</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 product-container">
                    {
                        cart.map(singleProduct => 
                            <OrderReviewItem removeCartItem = {removeCartItem} product={singleProduct} key={singleProduct.key}>
                            </OrderReviewItem>
                        )
                    }
                </div>
                <div className="col-2 cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;