import React from 'react';

const ProjectCard = ({ project, onFavouriteToggle, onToDoClick, onDelete }) => {
  
  const handleFavClick = () => {
    if (onFavouriteToggle) {
      onFavouriteToggle(project.id); 
    }
  };

  const handleToDoClick = () => {
    if (onToDoClick) {
      onToDoClick(project.id); 
    }
  };
  
  const handleDelete = () => {
    if (onDelete) {
      onDelete(project.id); 
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
        {project.isToDo ? '✅ ' : '⬜ Do?'} 
      </button>
      <button onClick={handleDelete}>❌</button>
    </div>
  );
};

export default ProjectCard;
