import React from "react";

const ToDoList = ({ toDoProjects }) => {
  // Make sure the prop is always an array
  if (!Array.isArray(toDoProjects)) {
    return <p>Loading your To-Do list...</p>; // Or some fallback message
  }
  
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
