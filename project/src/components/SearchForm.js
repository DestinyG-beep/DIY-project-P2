import React, { useState } from 'react';

// SearchForm Component
const SearchForm = ({ projects, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    filterProjects(searchQuery); // Call the filter function on search query
  };

  // Filter projects based on search query
  const filterProjects = (query) => {
    if (!query) {
      onSearch(projects); // If no query, show all projects
    } else {
      const filtered = projects.filter(project =>
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase())
      );
      onSearch(filtered); // Pass the filtered data back to the parent component
    }
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
};

export default SearchForm;
