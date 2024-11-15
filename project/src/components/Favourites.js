import React from "react";

function Favourites({ favouriteProjects = [] }) {
  // Ensure favouriteProjects is always an array, even if it's not passed in
  return (
    <div>
      <h2>Your Favourite Projects</h2>
      <div className="project-cards">
        {favouriteProjects.length === 0 ? (
          <p>No favourite projects yet.</p>
        ) : (
          favouriteProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favourites;
