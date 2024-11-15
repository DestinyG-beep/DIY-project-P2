import React, { useState, useEffect } from 'react';

const ProjectCard = ({ onFavClick, onToDoClick }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  // Handle Favourite Toggle
  const handleFavClick = (id) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id
          ? { ...project, isFav: !project.isFav }
          : project
      )
    );
    onFavClick(id);  // Optionally call a parent function to update parent state
  };

  // Handle To-Do Toggle
  const handleToDoClick = (id) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id
          ? { ...project, isToDo: !project.isToDo }
          : project
      )
    );
    onToDoClick(id);  // Optionally call a parent function to update parent state
  };

  // Handle Delete
  const handleDelete = (id) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="featured-projects">
      <div className="project-cards">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            {/* Favourites Button */}
            <button onClick={() => handleFavClick(project.id)}>
              {project.isFav ? '❤️' : '🤍'} Favourite
            </button>

            {/* To-Do Button */}
            <button onClick={() => handleToDoClick(project.id)}>
              {project.isToDo ? '✅ In To-Do' : '❌ Add To To-Do'}
            </button>

            {/* Delete Button */}
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
