import React from 'react';
import {Link} from "react-router-dom";

const OrderReviewItem = (props) => {
    const {key, img, name, seller, wholePrice, priceFraction, stock, cartQuantity, price} = props.product;
    return (
        <div>
            <div className="row product-div shadow">
                <div className="col-4">
                    <img className="img-fluid" src={img} alt=""/>
                </div>
                <div className="col-8 p-1"> 
                    <p> <Link to={"/product/"+key}>{name}</Link></p>
                    <h6>Quantity: {cartQuantity}</h6>
                    <h6>Price: {price}</h6>
                    <h6>by: {seller}</h6>
                    <h5>$<b>{wholePrice}.{priceFraction}</b></h5>
                    <p>only <b>{stock}</b> left in stock - order soon</p>
                    <button onClick={() => props.removeCartItem(key)} name="ck" className="btn btn-success">remove</button>
                </div>
            </div>
        </div>
    );
};

export default OrderReviewItem;