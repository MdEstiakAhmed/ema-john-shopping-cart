import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import {Link} from "react-router-dom";

const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(product => product.key === productKey);
    console.log(product);
    const {key, img, name, seller, wholePrice, priceFraction, stock} = product;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div>
                            <img className="img-fluid" src={img} alt=""/>
                        </div>
                        <p> <Link to={"/product/"+key}>{name}</Link></p>
                        <h6>by: {seller}</h6>
                        <h5>$<b>{wholePrice}.{priceFraction}</b></h5>
                        <p>only <b>{stock}</b> left in stock - order soon</p>
                    </div>
                    <div className="col-4">
                        {/* <Cart></Cart> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;