import React, { useState } from 'react';

const ProjectCard = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Wooden Chair',
      description: 'Create a simple yet sturdy wooden chair.',
      image: 'https://via.placeholder.com/200',
      isFav: false
    },
    {
      id: 2,
      title: 'Painted Pottery',
      description: 'Make beautiful pottery and paint it with your favorite designs.',
      image: 'https://via.placeholder.com/200',
      isFav: false
    },
    {
      id: 3,
      title: 'Cardboard Organizer',
      description: 'Design a stylish cardboard organizer for your desk.',
      image: 'https://via.placeholder.com/200',
      isFav: false
    }
  ]);

  const handleFavClick = (id) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id
          ? { ...project, isFav: !project.isFav } // Toggle favorite state for this project
          : project
      )
    );
  };

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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
