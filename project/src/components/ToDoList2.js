import React, { useState, useEffect } from 'react';

const ToDoList = ( {toDoProjects} ) => {

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
