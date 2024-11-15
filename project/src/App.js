import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import ToDoList from './components/ToDoList';
import Favourites from './components/Favourites';
import SearchForm from './components/SearchForm';

function App() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [favouriteProjects, setFavouriteProjects] = useState([]);
  const [toDoList, setToDoList] = useState([]);

  // Fetch projects from db.json on component mount
  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data); // Initialize filtered projects as all projects
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  // Handle toggling of favourites
  const handleFavouriteToggle = (id) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id
          ? { ...project, isFav: !project.isFav }
          : project
      )
    );
  };

  // Update the favouriteProjects list whenever projects change
  useEffect(() => {
    const favourites = projects.filter(project => project.isFav);
    setFavouriteProjects(favourites); // Store the favourited projects
  }, [projects]);

  // Handle "Add to To-Do" click
  const handleToDoClick = (id) => {
    const project = projects.find(project => project.id === id);
    if (!toDoList.some(item => item.id === id)) {
      setToDoList([...toDoList, project]);
    } else {
      setToDoList(toDoList.filter(item => item.id !== id));
    }
  };

  // Function to handle the search results from SearchForm
  const handleSearch = (filteredData) => {
    setFilteredProjects(filteredData);
  };

  return (
    <section>
      <div className="App">
        {/* Header Section */}
        <header className="app-header">
          <h1 id="h1">Do It Yourself Projects</h1>
          <NavBar />
        </header>

        {/* Search Form */}
        <SearchForm 
          projects={projects} 
          onSearch={handleSearch}  // Pass the search handler to SearchForm
        />

        {/* Featured Projects Section */}
        <h2 id="F1">Featured Projects</h2>
        <div className="project-cards">
          {filteredProjects.length === 0 ? (
            <p>No projects match your search.</p>
          ) : (
            filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onFavouriteToggle={handleFavouriteToggle}
                onToDoClick={handleToDoClick}
              />
            ))
          )}
        </div>

        {/* To Do List Section */}
        <ToDoList toDoProjects={toDoList} id="T1"/>

        {/* Favourites Section */}
        <Favourites favouriteProjects={favouriteProjects} id="C1"/>

        {/* Footer Section */}
        <footer className="app-footer">
          <p>Warning !! The content and instructions on this app were compiled only to simulate practicality. Should an accident occur from following these instructions, the author will not be held accountable. Children should have parental or guardian supervision while doing any of the projects proposed.</p>
        </footer>
      </div>
    </section>
  );
}

export default App;
