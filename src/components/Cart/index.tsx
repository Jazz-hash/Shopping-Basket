import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import Layout from "../Layout";
import CartItem from "./CartItem";
import { emptyCart } from "../../store/cartReducer";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  let totalItems = 0,
    totalPrice = 0;
  cart.map((cartItems) => (totalItems += cartItems.quantity));
  cart.map((cartItems) =>
    cartItems.products.map(
      (item) => (totalPrice += item.price * cartItems.quantity)
    )
  );

  return (
    <Layout>
      <div className="container">
        <div className="card shadow py-5">
          <h1 className="text-styled text-center">Cart</h1>
          <hr className="ml-5 mr-5" />
          <div className="card-body">
            {cart.length ? (
              cart.map((cartItem) => <CartItem product={cartItem} />)
            ) : (
              <div className="card w-75 ml-auto mr-auto mb-3 shadow">
                <div className="card-body">
                  <p className="card-text text-center text-danger">
                    Nothing found in your cart
                  </p>
                </div>
              </div>
            )}
            <div className="card w-75 ml-auto mr-auto mb-3 shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    Total items: {totalItems} - Total: ${totalPrice}
                  </div>
                  <div className="col">
                    <button
                      className="btn float-right ml-2 text-white btn-danger text-uppercase"
                      onClick={() => dispatch(emptyCart())}
                    >
                      Empty Cart
                    </button>

                    <Link
                      to="/"
                      className="btn float-right ml-2 border text-uppercase"
                    >
                      Go to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default Cart;
