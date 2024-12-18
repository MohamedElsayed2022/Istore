import React from 'react';

const Filter = ({ onFilter }) => {
  return (
    <div className="mb-3 d-flex justify-content-center">
      <button className="btn btn-outline-dark me-2" onClick={() => onFilter('All')}>
        All
      </button>
      <button className="btn btn-outline-dark me-2" onClick={() => onFilter('Clothes')}>
        Clothes
      </button>
      <button className="btn btn-outline-dark" onClick={() => onFilter('Electronics')}>
        Electronics
      </button>
    </div>
  );
};

export default Filter;
