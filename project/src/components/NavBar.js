const NavBar = () => {
    return ( 
        <nav className="navbar">
           <h1 id="h1">Do It Yourself Projects</h1>
           <p className="tagline">Find creative DIY projects using the materials you have at home!</p>
           <div className="links">
            <a className="l1" href="/">Home</a>
            <a href="/create">Start</a>
            <a href="/create">Projects</a>
           </div>
        </nav>
     );
}
 
export default NavBar;