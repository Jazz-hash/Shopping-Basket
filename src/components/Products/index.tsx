import React from "react";
import Layout from "../Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import ProductItem from "./ProductItem";
import headerBg from "./../../images/header_bg.png";

const Product = () => {
  const products = useSelector((state: RootState) => state.product);

  return (
    <Layout>
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-6">
            <h1 style={{ fontSize: "55px" }}>
              All Classic Footwear Collections!
            </h1>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </h5>
          </div>
          <div className="col">
            <img src={headerBg} width="100%" alt="header" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container-fluid bg-dark p-5">
        <h1 className="text-center text-white text-styled">
          Trending Products
        </h1>
        <hr style={{ backgroundColor: "white" }} />
        {products ? (
          <ProductItem products={products} />
        ) : (
          <p className="text-center">No products found</p>
        )}
      </div>
    </Layout>
  );
};

export default Product;
