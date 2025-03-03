import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Card } from "react-bootstrap";

export default function Product(props) {
  const { product } = props;
  return (
    // <div key={product._id} className="card">
    <div key={product.id}>
      <Card style={{ width: "25rem", padding: "10px" }}>
        <Link to={`/product/${product._id}`}>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            style={{ width: "23rem", height: "25rem" }}
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          {/* <div className="row"> */}
          <Card.Text className="price">₹{product.price}</Card.Text>
          <Card.Text>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.name}
            </Link>
          </Card.Text>
          {/* </div> */}
        </Card.Body>
      </Card>
    </div>
  );
}
