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


function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>
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

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;