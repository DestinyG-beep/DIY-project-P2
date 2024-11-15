import React, { useState, useEffect } from "react";

const ToDoList = () => {
  const [toDoProjects, setToDoProjects] = useState([]); 

  
  useEffect(() => {
    try {
      
      const storedProjects = JSON.parse(localStorage.getItem("toDoProjects")) || [];
      setToDoProjects(storedProjects);
    } catch (error) {
      
      console.error("Error parsing toDoProjects from localStorage", error);
      setToDoProjects([]); 
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
              <button onClick={() => window.location.href = "/projects"}>
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
