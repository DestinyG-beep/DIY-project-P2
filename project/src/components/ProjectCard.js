import React from 'react';

const ProjectCard = ({ project, onFavClick, onToDoClick, onDelete }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {/* Favourites Button */}
      <button onClick={() => onFavClick(project.id)}>
        {project.isFav ? '❤️' : '🤍'} Favourite
      </button>

      {/* To-Do Button */}
      <button onClick={() => onToDoClick(project.id)}>
        {project.isToDo ? '✅ In To-Do' : '❌ Add To To-Do'}
      </button>

      {/* Delete Button */}
      <button onClick={() => onDelete(project.id)}>Delete</button>
    </div>
  );
};

export default ProjectCard;
