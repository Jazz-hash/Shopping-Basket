import React from "react";
import { Link } from "react-router-dom";

interface Props {
  products: Product[];
}

const ProductItem: React.FC<Props> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <p>
          <Link to={`/product/${product.id}`}>
            #{product.id} {product.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default ProductItem;
