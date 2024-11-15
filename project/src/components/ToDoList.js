import React, { useState, useEffect } from "react";

const ToDoList = () => {
  const [toDoProjects, setToDoProjects] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("toDoProjects")) || [];
    setToDoProjects(storedProjects);
  }, []);

  return (
    <div>
      <h2>Your To-Do List</h2>
      <div className="project-cards">
        {toDoProjects.length === 0 ? (
          <p>No to-do projects available.</p>
        ) : (
          toDoProjects.map((project) => (
            <div key={project.id} className="project-card">
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
