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
        {/* Header Section */}
        <header className="app-header">
          <h1 id="h1">Do It Yourself Projects</h1>
          <NavBar /> {/* Navigation links */}
        </header>

        {/* Main Content: Routing */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home Page */}
            <Route path="/featured" element={<FeaturedProjects />} /> {/* Featured Projects */}
            <Route path="/todo" element={<ToDoList />} /> {/* To-Do List */}
            <Route path="/favourites" element={<Favourites />} /> {/* Favourites */}
            <Route path="*" element={<NotFound />} /> {/* Fallback for invalid routes */}
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="app-footer">
          <p>
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
