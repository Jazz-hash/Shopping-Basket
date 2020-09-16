import React from "react";
import { Link } from "react-router-dom";
import "./../../Component.css";

interface Props {
  products: Product[];
}

const ProductItem: React.FC<Props> = ({ products }) => {
  return (
    <section id="grid" className="grid clearfix">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "black" }}
          data-path-hover="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z"
        >
          <figure style={{ height: "420px" }}>
            <div className="imageFix">
              <img src={product.image} alt="cart" />
            </div>
            <svg viewBox="0 0 180 320" preserveAspectRatio="none">
              <path d="m 0,0 0,171.14385 c 24.580441,15.47138 55.897012,24.75772 90,24.75772 34.10299,0 65.41956,-9.28634 90,-24.75772 L 180,0 0,0 z"></path>
              <desc>Created with Snap</desc>
              <defs></defs>
            </svg>
            <figcaption>
              <h2 className="text-danger">{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Click to see more details.</p>
            </figcaption>
          </figure>
        </Link>
      ))}
    </section>
  );
};

export default ProductItem;
