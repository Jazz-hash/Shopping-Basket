import React, { useState } from "react";
import Layout from "../Layout";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { addToCart } from "../../store/cartReducer";

const ProductItemDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product>();
  const [btnText, setBtnText] = useState("Add To Cart");

  const tempData = setProduct(
    useSelector((state: RootState) =>
      state.product.find((product) => product.id === Number(id))
    )
  );

  return (
    <Layout>
      <div className="row p-5 mb-5">
        <div className="col-5">
          <h1>
            #{product?.id} - {product?.name}
          </h1>
          <h2>Price: {product?.price}</h2>
          <hr />
          <p>Description: {product?.details}</p>
          <button
            type="button"
            onClick={() => dispatch(addToCart(product))}
            className="mt-3 btn-lg btn btn-danger w-100"
          >
            {btnText}
          </button>
        </div>
        <div className="col-7">
          <img src={product?.image} alt="product" height="400px" width="100%" />
        </div>
      </div>
    </Layout>
  );
};

export default ProductItemDetail;
