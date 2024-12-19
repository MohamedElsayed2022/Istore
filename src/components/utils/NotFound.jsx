import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center">
        <h1 className="display-4 text-danger">404</h1>
        <p className="lead">Page Not Found</p>
        <Link to="/" className="btn btn-dark">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
