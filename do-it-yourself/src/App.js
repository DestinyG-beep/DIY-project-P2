import React, { useState } from 'react'; // Import React and useState
import './App.css'; // Import your styles (CSS file)

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
      <header className="app-header">
        <h1 id="h1">Do It Yourself Projects</h1>
        <p className="tagline">Find creative DIY projects using the materials you have at home!</p>
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
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <img src="https://via.placeholder.com/200" alt="Wooden Chair" />
            <h3>Wooden Chair</h3>
            <p>Create a simple yet sturdy wooden chair.</p>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/200" alt="Painted Pottery" />
            <h3>Painted Pottery</h3>
            <p>Make beautiful pottery and paint it with your favorite designs.</p>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/200" alt="Cardboard Organizer" />
            <h3>Cardboard Organizer</h3>
            <p>Design a stylish cardboard organizer for your desk.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="app-footer">
                <button className="start-button">Start a New Project</button>
      </footer>
    </div>
  );
}

export default App;
