import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import Layout from "../Layout";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart);
  return <Layout>CArt</Layout>;
};

export default Cart;
