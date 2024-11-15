import React from "react";

const Favourites = ({ favouriteProjects }) => {
    return ( 
        <section className="favourites-section">
            <h2>Your Favourite Projects</h2>
            <div className="project-cards">
                {favouriteProjects.length === 0 ? (
                  <p>No favourites yet. Mark some projects as favourite!</p>
                ) : (
                  favouriteProjects.map(project => (
                    <div key={project.id} className="project-card">
                      <img src={project.image} alt={project.title} />
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                    </div>
                  ))
                )}
            </div>
        </section>
    );
}

export default Favourites;
