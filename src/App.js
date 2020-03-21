import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import { AuthContextProvider } from './components/Login/useAuth';
import { useAuth } from './components/Login/useAuth';
import { useEffect } from 'react';


function App() {
  const auth = useAuth();
  console.log(auth);
  useEffect(() => {
                                    
  },[auth])
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/shop">
              <Shop></Shop>
            </Route>

            <Route path="/orderReview">
              <OrderReview></OrderReview>
            </Route>

            <Route path="/manageInventory">
              <Inventory></Inventory>
            </Route>

            <Route exact path="/">
              <Shop></Shop>
            </Route>

            <Route path="/product/:productKey">
              <ProductDetails></ProductDetails>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}


export default App;