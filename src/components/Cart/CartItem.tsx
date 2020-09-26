import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementProduct,
  decrementProduct,
} from "../../store/cartReducer";

interface Props {
  product: Cart;
}

const CartItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      {product.products.map((productDetail) => (
        <div className="card w-75 ml-auto mr-auto mb-3 shadow">
          <div className="card-body">
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="col">
                <img
                  src={productDetail.image}
                  height="60px"
                  alt={productDetail.name}
                />
              </div>
              <div className="col">
                <h4 className="card-title">{productDetail.name}</h4>
              </div>
              <div className="col">
                <button
                  className="btn border text-danger"
                  onClick={() => dispatch(incrementProduct(productDetail))}
                >
                  +
                </button>
                <span className="ml-3 mr-3">{product.quantity}</span>
                <button
                  className="btn border text-danger"
                  onClick={() => dispatch(decrementProduct(productDetail))}
                >
                  -
                </button>
              </div>
              <div className="col">
                <h6>
                  ${productDetail.price}x{product.quantity}= $
                  {productDetail.price * Number(product.quantity)}
                </h6>
              </div>
              <div className="col-1">
                <button
                  className="btn text-danger"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
