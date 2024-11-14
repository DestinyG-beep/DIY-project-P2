import React, { useState } from 'react';
import PropTypes from 'prop-types'; // For type checking

// SearchForm Component
const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery); // Pass the search query to parent component
  };

  return (
    <div className="search-form">
      <h2>Search DIY Projects</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter materials (e.g., wood, paint)"
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
}

// Prop type validation
SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired, // Expect a function to be passed as prop
};

export default SearchForm;
