import React, { useState } from 'react';

const SearchForm = ({ projects, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    filterProjects(searchQuery); 
  };

  const filterProjects = (query) => {
    if (!query) {
      onSearch(projects); 
    } else {
      const filtered = projects.filter(project =>
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase())
      );
      onSearch(filtered); 
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
