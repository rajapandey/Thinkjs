import React from 'react';

const ProductSearch = ({ searchTerm, onSearchChange }) => {
  return (
    <>
      <label htmlFor="searchInput" className="form-label">Search for products:</label>
      <input
        type="text"
        id="searchInput"
        className="form-control"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Type to search..."
      />
    </>
  );
};

export default ProductSearch;
