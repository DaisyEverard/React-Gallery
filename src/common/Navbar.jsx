import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav>
        <Link to="/" className="nav-link" id="info-link">HOME</Link>
        <Link to="/gallery" className="nav-link" id="main-link">GALLERY</Link>
        <Link to="/cv" className="nav-link" id="info-link">CV</Link>
        <Link to="/contact" className="nav-link" id="main-link">CONTACT</Link>
  </nav>
}

export default Navbar; 