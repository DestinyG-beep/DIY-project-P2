import React, { useState, useEffect } from 'react';

const ToDoList = () => {
  // Step 1: Initialize state for toDoProjects
  const [toDoProjects, setToDoProjects] = useState([]);

  // Step 2: Fetch or update the to-do list when the component mounts (optional)
  useEffect(() => {
    // If the To-Do list is stored in local storage, load it from there
    const storedToDoProjects = JSON.parse(localStorage.getItem('toDoProjects')) || [];
    setToDoProjects(storedToDoProjects);
  }, []);

  // You could also handle adding/removing items from the To-Do list here if needed

  return (
    <section className="to-do-list-section">
      <h2>Your To-Do Projects</h2>
      <div className="project-cards">
        {toDoProjects.length === 0 ? (
          <p>No projects in your To-Do list yet.</p>
        ) : (
          toDoProjects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default ToDoList;
