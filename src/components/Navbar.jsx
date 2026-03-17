import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">portfolio.</h2>

        <ul className="nav-links">
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#design">design</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;