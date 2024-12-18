import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "425px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ffff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Img
          style={{
            height: "270px",
            width: "100%",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
          src={product.image}
        />

        <Card.Body>
          <Card.Title>
            <div
              className="card-title"
              style={{
                fontSize: "1.6rem",
                fontWeight: "400",
                color: "#333",
                lineHeight: "1.2",  
              }}
              title={product.name}      
            >
              {product.name}
            </div>
          </Card.Title>

          <Card.Text>
            <div
              className="card-description mb-3"
              style={{
                fontSize: "0.9rem",
                color: "rgba(0, 0, 0, 0.6)",
                overflow: "hidden",
              }}
            >
              {product.description}
            </div>
          </Card.Text>

          <Card.Text className="d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center"
              style={{ marginTop: "-12px" }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#b12704",
                }}
              >
                {product.price}
              </div>
              <div
                className="mx-1"
                style={{
                  fontSize: "1.2rem",
                  color: "#555",
                }}
              >
                $
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
