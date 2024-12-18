import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="input-group mb-3 ">
      <input
        type="text"
        className="form-control "
        style={{height:"55px"}}
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
