import React, { useState, useEffect } from "react";

function Favourites() {
  const [favouriteProjects, setFavouriteProjects] = useState([]); // Initialize as an empty array

  // Fetch favourite projects from localStorage or initialize with an empty array
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("favouriteProjects")) || [];
    setFavouriteProjects(storedProjects);
  }, []);

  
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
