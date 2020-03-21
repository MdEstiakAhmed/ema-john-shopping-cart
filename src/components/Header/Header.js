import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from '../Login/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
    const auth = useAuth();
    console.log(auth.user);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><img className="img-fluid nav-logo" src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/orderReview">Order Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/manageInventory">Manage Inventory</a>
                        </li>
                        <li className="nav-item">
                            {
                                auth.user ? 
                                <a className="nav-link" href="/login">{auth.user.name}</a> :
                                <a className="nav-link" href="/login">account</a>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                auth.user ? 
                                <a onClick = {auth.googleSignOut} className="nav-link" href="/login">logout</a> :
                                <a className="nav-link" href="/login">login</a>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control m-3" id="search" placeholder="search content"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Header;