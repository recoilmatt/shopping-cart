import React from "react";

function Colors(product) {
  return (
    <div className="colors">
      {product.colors.map((color, index) => (
        <button key={index} style={{ background: color }}></button>
      ))}
    </div>
  );
}

export default Colors;
