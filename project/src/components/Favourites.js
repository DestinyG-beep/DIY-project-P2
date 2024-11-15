import React from "react";

const Favourites = ({ favouritesProjects }) => {
    return ( 
        <section className="favourites-section">
            <h2>Your Favourite Projects</h2>
            <div className="project-cards">
                {favouritesProjects.length === 0 ? (
                  <p>No favourites yet</p>
                ) :(
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