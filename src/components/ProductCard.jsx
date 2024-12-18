import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "407px",
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
              className="card-title text-truncate"
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "#333",
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
            <div className="d-flex align-items-center " style={{marginTop:"-17px"}}>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#ff5722",
                }}
              >
                {product.price}
              </div>
              <div
                className="mx-1"
                style={{
                  fontSize: "1.5rem",
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

{
  /* <div className="card h-100 text-center">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <h6>${product.price}</h6>
        </div>
      </div> */
}
