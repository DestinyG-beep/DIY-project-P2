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

  // Toggle favourite status
  const toggleFavourite = (id) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, isFav: !project.isFav } : project
    );

    // Update the state and save to localStorage
    setProjects(updatedProjects);
    setFilteredProjects(updatedProjects);  // Update filtered projects

    // Save updated projects to localStorage for future use
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    
    // Update favourites in localStorage as well
    const favourites = updatedProjects.filter((project) => project.isFav);
    localStorage.setItem("favouriteProjects", JSON.stringify(favourites));
  };

  // Toggle to-do status
  const toggleToDo = (id) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, isToDo: !project.isToDo } : project
    );

    // Update the state and save to localStorage
    setProjects(updatedProjects);
    setFilteredProjects(updatedProjects);  // Update filtered projects

    // Save updated projects to localStorage for future use
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    // Update toDo list in localStorage
    const toDoList = updatedProjects.filter((project) => project.isToDo);
    localStorage.setItem("toDoProjects", JSON.stringify(toDoList));
  };

  // Delete project
  const handleDelete = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
    setFilteredProjects(updatedProjects);  // Update filtered projects

    // Save updated projects to localStorage for future use
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <div>
      <h2>Featured Projects</h2>
      <SearchForm projects={projects} onSearch={handleSearch} />
      <div className="project-cards">
        {currentProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onFavouriteToggle={toggleFavourite}
            onToDoClick={toggleToDo}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage * projectsPerPage >= filteredProjects.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FeaturedProjects;
