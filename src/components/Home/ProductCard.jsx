import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card className="my-2 Product-card" style={{ border: "none" }}>
        <Card.Img className="Product-card-img" src={product.image} />
        <Card.Body>
          <Card.Title>
            <div className="card-title" title={product.name}>
              {product.name}
            </div>
          </Card.Title>

          <Card.Text>
            <div className="card-description mb-3">{product.description}</div>
          </Card.Text>

          <Card.Text className="d-flex justify-content-between align-items-center">
            <div className="price-section">
              <div className="price">{product.price}</div>
              <div className="currency">$</div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
