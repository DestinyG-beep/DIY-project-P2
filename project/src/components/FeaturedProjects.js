import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import SearchForm from "./SearchForm";

function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Fetch projects from the server
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data); // Initialize with all projects
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  // Handle search
  const handleSearch = (filteredData) => {
    setFilteredProjects(filteredData);
  };

  return (
    <div>
      <h2>Featured Projects</h2>
      <SearchForm projects={projects} onSearch={handleSearch} />
      <div className="project-cards">
        {filteredProjects.length === 0 ? (
          <p>No projects match your search.</p>
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </div>
  );
}

export default FeaturedProjects;
