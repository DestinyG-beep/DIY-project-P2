import React, { useState, useEffect } from "react";

const ToDoList = () => {
  const [toDoProjects, setToDoProjects] = useState([]);

  // Fetch to-do projects from localStorage or initialize with an empty array
  useEffect(() => {
    const storedToDoProjects = JSON.parse(localStorage.getItem("toDoProjects")) || [];
    setToDoProjects(storedToDoProjects);
  }, []);

  return (
    <div>
      <h2>Your To-Do List</h2>
      <div className="project-cards">
        {toDoProjects.length === 0 ? (
          <p>No to-do projects yet.</p>
        ) : (
          toDoProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ToDoList;
