import React, { useState } from 'react';

const ProjectCard = () => {
    return ( 
      <section className="featured-projects">
        <header className='PCh2'>
            <h2>Featured Projects </h2>
        </header>
        
        <body>
          <div className="project-cards">
          <div className="project-card">
            <img src="https://via.placeholder.com/200" alt="Wooden Chair" />
            <h3>Wooden Chair</h3>
            <p>Create a simple yet sturdy wooden chair.</p>
            <button>fav</button>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/200" alt="Painted Pottery" />
            <h3>Painted Pottery</h3>
            <p>Make beautiful pottery and paint it with your favorite designs.</p>
            <button>fav</button>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/200" alt="Cardboard Organizer" />
            <h3>Cardboard Organizer</h3>
            <p>Design a stylish cardboard organizer for your desk.</p>
            <button>fav</button>
          </div>
        </div>
        </body>
      
        
      </section>
     );
}
 
export default ProjectCard;