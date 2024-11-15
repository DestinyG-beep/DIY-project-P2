import React, { useState, useEffect } from 'react';

const ProjectCard = () => {
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

  const handleFavClick = (id) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id
          ? { ...project, isFav: !project.isFav } 
          : project
      )
    );
  };

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
            <button onClick={() => handleFavClick(project.id)}>
              {project.isFav ? '❤️' : '🤍'}
            </button>
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
