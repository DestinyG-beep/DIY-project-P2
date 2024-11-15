import React, { useState } from 'react'; // Import React and useState
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import ToDoList from './components/ToDoList';
import Favourites from './components/Favourites';


function App() {

  return (
    <section>
      <div className="App">
        {/* Header Section */}
        <header className='app-header'>
        <h1 id="h1">Do It Yourself Projects</h1>
          <NavBar/>
        </header>
      </div>
      
        
        
      <div>
        {/* Search Form */}
        
        {/* Intro Section */}
        <section className="intro-section">
          <h2>Get Inspired</h2>
          <p>Type in the materials you already have, and get suggestions of projects that that you can make.</p>
        </section>

        {/* Featured Projects Section */}
        <h2 id='F1'>Featured Projects </h2>
        <ProjectCard/>

        {/*To Do List*/}
        <h2>To Do List</h2>
        <ToDoList/>
        
        {/*favourites section*/}
        <Favourites/>

        {/* Footer Section */}
        <footer className="app-footer">
        <p>Warning !! The content and intructions on this app were compiled only to simulate practicality. Should an accident occur from following these instructions ,the author will not be held accountable. Children should have parental or guardian supervision while doing any of the projects proposed. </p>
        </footer>
      </div>
    </section>
    
      
    
  );
}

export default App;
