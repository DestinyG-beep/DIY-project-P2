import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import SearchForm from "./SearchForm";

function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(5);

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

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);


  const toggleFavourite = (id) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id ? { ...project, isFav: !project.isFav } : project
      )
    );
  };

  // Handle adding to To-Do list
  const toggleToDo = (id) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id ? { ...project, isToDo: !project.isToDo } : project
      )
    );
  };

   // Handle project deletion
  const handleDelete = (id) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
    setFilteredProjects(prevProjects => prevProjects.filter(project => project.id !== id)); // Update filtered projects if deleted
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
            <ProjectCard 
              key={project.id} 
              project={project}
              onFavouriteToggle={toggleFavourite}
              onToDoClick={toggleToDo}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

       {/* Pagination Controls */}
       <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * projectsPerPage >= filteredProjects.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FeaturedProjects;
