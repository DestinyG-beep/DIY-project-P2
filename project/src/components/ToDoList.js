import React, { useState, useEffect } from "react";

const ToDoList = () => {
  const [toDoProjects, setToDoProjects] = useState([]); // Initialize as an empty array

  // Fetch stored projects from localStorage
  useEffect(() => {
    try {
      // Attempt to parse the data stored in localStorage
      const storedProjects = JSON.parse(localStorage.getItem("toDoProjects")) || [];
      setToDoProjects(storedProjects);
    } catch (error) {
      // If there's an error parsing the data, log it and reset the state
      console.error("Error parsing toDoProjects from localStorage", error);
      setToDoProjects([]); // Fallback to an empty array
    }
  }, []);

  // Check if toDoProjects is an array before rendering
  return (
    <div>
      <h2>Your To-Do List</h2>
      <div className="project-cards">
        {Array.isArray(toDoProjects) ? (
          toDoProjects.length === 0 ? (
            <div>
              <p>No to-do projects yet.</p>
              <button onClick={() => window.location.href = "/add-project"}>
                Add a Project
              </button>
            </div>
          ) : (
            toDoProjects.map((project) => (
              <div key={project.id} className="project-card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))
          )
        ) : (
          <p>Error: Unable to load your to-do projects. Please try again later.</p>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
