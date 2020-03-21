import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import OrderReviewItem from '../OrderReviewItem/OrderReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import orderedConfirmLogo from '../../images/giphy.gif';
import { useAuth } from '../Login/useAuth';

const OrderReview = () => {
    const auth = useAuth();
    const [cart, setCart] = useState([]);
    const [orderedPlace, setOrderedPlace] = useState(false);
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

    const placeOrder = () =>{
        setCart([]);
        setOrderedPlace(true);
        processOrder();
    }

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
    },[])

    let thanksForOrder;
    let home;
    if(orderedPlace){
        home = 
        <Link to = "/shop">
            <button  className="btn btn-success">home</button>
        </Link>
        thanksForOrder = <img src={orderedConfirmLogo} alt=""/>
    }
    
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
                {thanksForOrder}
                <div className="col-2 cart-container">
                    <Cart cart={cart}>
                        {
                            auth.user ?
                            <Link to = "/orderReview">
                                <button onClick = {placeOrder} className="btn btn-success">place order</button>
                            </Link> :
                            <Link to = "/login">
                                <button onClick = {placeOrder} className="btn btn-success">login to order</button>
                            </Link>

                        }
                    {home}
                    </Cart>
                </div>
                
            </div>
        </div>
    );
};

export default OrderReview;