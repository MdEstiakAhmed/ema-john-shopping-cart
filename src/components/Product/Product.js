import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {key, img, name, seller, wholePrice, priceFraction, stock} = props.product;
    return (
        <div>
            <div className="row product-div shadow">
                <div className="col-4">
                    <img className="img-fluid" src={img} alt=""/>
                </div>
                <div className="col-8 p-1">
                    <p>{name}</p>
                    <h6>by: {seller}</h6>
                    <h5>$<b>{wholePrice}.{priceFraction}</b></h5>
                    <p>only <b>{stock}</b> left in stock - order soon</p>
                    <button onClick={() => props.btnCk(props.product)} name="ck" className="btn btn-success"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
                    {/* <button onClick={props.btnCk} name="ck" className="btn btn-success"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button> */}
                </div>
            </div>
        </div>
    );
};

export default Product;