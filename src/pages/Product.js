import React from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Page</h1>

      {id ? (
        <div>Product ID: {id}</div>
      ) : (
        <ul>
          <li>
            <Link to="/product/1">Product1</Link>
          </li>
          <li>
            <Link to="/product/2">Product2</Link>
          </li>
          <li>
            <Link to="/product/3">Product3</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Product;
