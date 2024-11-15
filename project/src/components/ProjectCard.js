import React from 'react';

const ProjectCard = ({ project, onFavouriteToggle, onToDoClick, onDelete }) => {
  // Handle favourite toggle
  const handleFavClick = () => {
    if (onFavouriteToggle) {
      onFavouriteToggle(project.id); // Call the function passed as a prop to toggle favorite
    }
  };

  // Handle adding to To-Do list
  const handleToDoClick = () => {
    if (onToDoClick) {
      onToDoClick(project.id); // Call the function passed as a prop to toggle To-Do status
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

      {/* Favourite Button */}
      <button onClick={handleFavClick}>
        {project.isFav ? '❤️' : '🤍'} {/* If project is fav, show filled heart, else show outline */}
      </button>

      {/* To-Do Button */}
      <button onClick={handleToDoClick}>
        {project.isToDo ? '✅ ' : '⬜ Do?'} {/* If project is in To-Do list, show checkmark */}
      </button>

      {/* Delete Button */}
      <button onClick={handleDelete}>❌</button>
    </div>
  );
};

export default ProjectCard;
