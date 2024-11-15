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

  // Handle delete project
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

      {/* Favourites Button */}
      <button onClick={handleFavClick}>
        {project.isFav ? '❤️ Remove from Favourites' : '🤍 Add to Favourites'}
      </button>

      {/* To-Do Button */}
      <button onClick={handleToDoClick}>
        {project.isToDo ? '✅ In To-Do' : '✅ In To-Do'}
      </button>

      {/* Delete Button */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProjectCard;
