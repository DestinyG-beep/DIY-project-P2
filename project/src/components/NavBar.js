const NavBar = () => {
    return ( 
        <nav className="navbar">
           <h2 >Welcome to Do It Yourself projects</h2>
           <p className="tagline">Find creative DIY projects using the materials you have at home!</p>
           <div className="links">
            <a className="l1" href="/">Home</a>
            <a href="/create">To-Do</a>
            <a href="#F1">Projects</a>
           </div>
        </nav>
     );
}
 
export default NavBar;