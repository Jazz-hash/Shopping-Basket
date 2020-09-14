import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart);
  return <div>CArt</div>;
};

export default Cart;
