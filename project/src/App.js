import React, { useState } from 'react'; // Import React and useState
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import SearchForm from './components/SearchForm.';


function App() {

  return (
    <div className="App">
      {/* Header Section */}
      <header className='app-header'>
      <h1 id="h1">Do It Yourself Projects</h1>
        <NavBar/>
      </header>

      {/* Search Form */}
      <SearchForm/>

      {/* Intro Section */}
      <section className="intro-section">
        <h2>Get Inspired</h2>
        <p>Type in the materials you already have, and get suggestions of projects that that you can make.</p>
      </section>

      {/* Featured Projects Section */}
      <h2 id='F1'>Featured Projects </h2>
      <ProjectCard/>

      {/* Footer Section */}
      <footer className="app-footer">
      <p>Warning !! The content and intructions on this app were compiled only to simulate practicality. Should an accident occur from following these instructions ,the author will not be held accountable. Children should have parental or guardian supervision while doing any of the projects proposed. </p>
      </footer>
    </div>
  );
}

export default App;
