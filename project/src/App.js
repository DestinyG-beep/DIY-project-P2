import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FeaturedProjects from "./components/FeaturedProjects";
import ToDoList from "./components/ToDoList";
import Favourites from "./components/Favourites";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1 id="h1">HOME DIY</h1>
          <NavBar /> 
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/projects" element={<FeaturedProjects />} /> 
            <Route path="/todo" element={<ToDoList />} /> 
            <Route path="/favourites" element={<Favourites />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p className="P1">
            Warning !! The content and instructions on this app were compiled
            only to simulate practicality. Should an accident occur from
            following these instructions, the author will not be held
            accountable. Children should have parental or guardian supervision
            while doing any of the projects proposed.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
