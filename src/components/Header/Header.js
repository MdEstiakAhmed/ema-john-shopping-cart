import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
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
                    </ul>
                </div>
            </nav>
            <div className="container">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="search" placeholder="search content"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Header;