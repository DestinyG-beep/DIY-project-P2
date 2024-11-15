import React, { useState, useEffect } from 'react';

// SearchForm Component
const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState([]); // All projects
  const [filteredProjects, setFilteredProjects] = useState([]); // Filtered projects
  const [loading, setLoading] = useState(true);
  const [toDoList, setToDoList] = useState([]); // To-Do list state

  // Fetch projects from db.json on component mount
  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data); // Set the fetched projects
        setFilteredProjects(data); // Set the initial filtered projects to all projects
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

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
      setFilteredProjects(projects); // If no query, show all projects
    } else {
      const filtered = projects.filter(project =>
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProjects(filtered); // Update the filtered projects state
    }
  };

  // Handle "Add to To-Do" click
  const handleToDoClick = (id) => {
    const project = projects.find(project => project.id === id);
    
    // Add project to To-Do list if it's not already there
    if (!toDoList.some(item => item.id === id)) {
      setToDoList([...toDoList, project]);
    } else {
      // If project is already in To-Do list, remove it
      setToDoList(toDoList.filter(item => item.id !== id));
    }
  };

  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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

      <section className="filtered-projects">
        <h3>Filtered Projects</h3>
        <div className="project-cards">
          {/* Display filtered projects */}
          {filteredProjects.length === 0 ? (
            <p>No projects match your search.</p>
          ) : (
            filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button 
                  onClick={() => handleToDoClick(project.id)}>
                  {toDoList.some(item => item.id === project.id) ? 'Added to To-Do' : 'Add to To-Do'}
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchForm;
