import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const CategorySelector = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <>
      <label htmlFor="categorySelect" className="form-label">Select a category:</label>
      <select id="categorySelect" className="form-select" value={selectedCategory} onChange={onCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}; 

export default CategorySelector;
