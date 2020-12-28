import React from "react";

function Sizes(product) {
  return (
    <div className="sizes">
      {product.sizes.map((size, index) => (
        <button key={index}>{size}</button>
      ))}
    </div>
  );
}

export default Sizes;
