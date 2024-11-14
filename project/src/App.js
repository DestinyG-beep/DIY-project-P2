import React, { useState } from 'react'; // Import React and useState
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // Handle input change in the search field
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update the search query state
  };

  // Handle form submission (optional: currently just logs the search query)
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    console.log("Search query:", searchQuery); // Log the search query for now
    // You can later use the query to filter projects here
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className='app-header'>
        <NavBar/>
      </header>

      {/* Search Form */}
      <section className="search-section">
        <h2>Search DIY Projects</h2>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Enter materials (e.g., wood, paint)"
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <h2>Get Inspired</h2>
        <p>Type in the materials you already have, and get suggestions of projects that that you can make.</p>
      </section>

      {/* Featured Projects Section */}
      <ProjectCard/>

      {/* Footer Section */}
      <footer className="app-footer">
      <p>Warning !! The content and intructions on this app were compiled only to simulate practicality. Should an accident occur from following these instructions ,the author will not be held accountable. Children should have parental or guardian supervision while doing any of the projects proposed. </p>
      </footer>
    </div>
  );
}

export default App;
