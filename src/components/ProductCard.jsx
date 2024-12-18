import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      {/* <div className="card h-100 text-center">
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
      </div> */}
 <Card
        className="my-2"
        style={{
          width: "100%",
          height: "380px", // زدت الطول قليلاً لتوفير مساحة للوصف
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ffff",
          boxShadow: "0 2px 2px 0 rgba(151, 151, 151, .5)",
        }}
      >
        <Card.Img style={{ height: "228px", width: "100%" }} src={product.image} />

        <Card.Body>
          <Card.Title>
            <div className="card-title">{product.name}</div>
          </Card.Title>
          <Card.Text>
            <div className="card-description mb-2" style={{ fontSize: "0.9rem", color: "#555" }}>
              {product.description}
            </div>
          </Card.Text>
          <Card.Text className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <div className="card-price">
                <div>{product.price}</div>
              </div>
              <div className="card-currency mx-1">$</div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
