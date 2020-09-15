import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Product from "./components/Products";
import Cart from "./components/Cart";
import ProductItemDetail from "./components/Products/ProductItemDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Product />
        </Route>
        <Route path="/product/:id/" exact>
          <ProductItemDetail />
        </Route>
        <Route path="/cart/" exact>
          <Cart />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
