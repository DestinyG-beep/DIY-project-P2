import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="links">
        <a><Link to="/">Home</Link></a>
        <a><Link to="/projects">Projects</Link></a>
        <a><Link to="/todo">To-Do List</Link></a>
        <a><Link to="/favourites">Favourites</Link></a>
      </div>
    </nav>
  );
}

export default NavBar;
