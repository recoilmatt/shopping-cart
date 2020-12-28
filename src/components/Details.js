import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

import Sizes from "./Sizes";
import DetailsThumb from "./DetailsThumb";

function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const [index, setIndex] = useState(0);
  const addCart = value.addCart;

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  return (
    <div>
      {details.map((product) => (
        <div className="details" key={product._id}>
          <img class="img-container" src={product.images[index]} alt="/" />

          <div className="box-details">
            <h2 title={product.title}>{product.title}</h2>
            <h3>${product.price}</h3>

            <p>{product.description}</p>
            <p>{product.content}</p>

            <DetailsThumb images={product.images} setIndex={setIndex} />

            <Sizes sizes={product.sizes} />

            <Link
              to="/cart"
              className="cart"
              onClick={() => addCart(product._id)}
            >
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
