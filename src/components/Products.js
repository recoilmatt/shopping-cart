import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

export default function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <section className="products-container">
      <div className="products">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <Link
              to={{
                pathname: `/products/${product._id}`,
              }}
            >
              <img src={product.images[0]} alt="/" />
            </Link>
            <div className="box">
              <h4 title={product.title}>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
              </h4>
              <p>{product.description}</p>

              <span className="price">${product.price}</span>

              {/* <button onClick={() => addCart(product._id)}>Add to Cart</button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
