import React from "react";
import Layout from "../Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import ProductItem from "./ProductItem";

const Product = () => {
  const products = useSelector((state: RootState) => state.product);

  return (
    <Layout>
      <div className="container">
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
