import React from "react";

interface Props {
  products: Product[];
}

const ProductItem: React.FC<Props> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <p>
          #{product.id} {product.name}
        </p>
      ))}
    </div>
  );
};

export default ProductItem;
