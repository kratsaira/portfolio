import "../styles/Navbar.css"

import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLink = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className="menu-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#about"    onClick={handleLink}>about</a></li>
          <li><a href="#skills"   onClick={handleLink}>skills</a></li>
          <li><a href="#projects" onClick={handleLink}>projects</a></li>
          <li><a href="#design"   onClick={handleLink}>design</a></li>
          <li><a href="#contact"  onClick={handleLink}>contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;