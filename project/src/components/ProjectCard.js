import React from 'react';

const ProjectCard = ({ project, onFavouriteToggle, onToDoClick, onDelete }) => {
  // Handle favourite toggle
  const handleFavClick = () => {
    if (onFavouriteToggle) {
      onFavouriteToggle(project.id); // Call the function passed as a prop
    }
  };

  // Handle add to To-Do list
  const handleToDoClick = () => {
    if (onToDoClick) {
      onToDoClick(project.id); // Call the function passed as a prop
    }
  };

  // Handle project deletion
  const handleDelete = () => {
    if (onDelete) {
      onDelete(project.id); // Call the delete function passed as a prop
    }
  };

  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <button onClick={handleFavClick}>
        {project.isFav ? '❤️' : '🤍'}
      </button>
      <button onClick={handleToDoClick}>
        {project.isToDo ? '✅ ' : '⬜Do?'}
      </button>
      <button onClick={handleDelete}>❌</button>
    </div>
  );
};

export default ProjectCard;
