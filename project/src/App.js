import React, { useState, useEffect } from 'react'; 
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import ToDoList from './components/ToDoList';
import Favourites from './components/Favourites';

function App() {
  const [projects, setProjects] = useState([]); // Store all projects
  const [favouriteProjects, setFavouriteProjects] = useState([]); // Store favourited projects
  const [toDoProjects, setToDoProjects] = useState([]); // Store To-Do list projects

  // Fetch projects from db.json on component mount
  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data); // Set the fetched projects
      })
      .catch(error => console.error('Error fetching projects:', error));
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

  // Handle toggling of to-do items
  const handleToDoToggle = (id) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id
          ? { ...project, isToDo: !project.isToDo }
          : project
      )
    );
  };

  // Handle deleting a project
  const handleDelete = (id) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
  };

  // Update the favouriteProjects and toDoProjects whenever projects change
  useEffect(() => {
    const favourites = projects.filter(project => project.isFav);
    setFavouriteProjects(favourites); // Store the favourited projects

    const toDo = projects.filter(project => project.isToDo);
    setToDoProjects(toDo); // Store the To-Do projects
  }, [projects]); // Only run when the projects state changes

  return (
    <section>
      <div className="App">
        {/* Header Section */}
        <header className="app-header">
          <h1 id="h1">Do It Yourself Projects</h1>
          <NavBar />
        </header>

        {/* Intro Section */}
        <section className="intro-section">
          <h2>Get Inspired</h2>
          <p>Type in the materials you already have, and get suggestions of projects you can make.</p>
        </section>

        {/* Featured Projects Section */}
        <h2 id="F1">Featured Projects</h2>
        <div className="project-cards">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onFavClick={handleFavouriteToggle}
              onToDoClick={handleToDoToggle}
              onDelete={handleDelete}  // Pass the delete function as a prop
            />
          ))}
        </div>

        {/* To Do List Section */}
        <h2>Your To-Do List</h2>
        <ToDoList toDoProjects={toDoProjects} />

        {/* Favourites Section */}
        <h2>Your Favourite Projects</h2>
        <Favourites favouriteProjects={favouriteProjects} />

        {/* Footer Section */}
        <footer className="app-footer">
          <p>Warning!! The content and instructions on this app were compiled only to simulate practicality. Should an accident occur from following these instructions, the author will not be held accountable. Children should have parental or guardian supervision while doing any of the projects proposed.</p>
        </footer>
      </div>
    </section>
  );
}

export default App;
