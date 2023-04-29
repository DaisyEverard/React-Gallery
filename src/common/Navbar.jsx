import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const {mode} = props;

    return <nav>
        <Link to="/" className="nav-link" id="info-link">HOME</Link>
        <Link to="/gallery" className="nav-link" id="main-link">GALLERY</Link>
        <Link to="/contact" className="nav-link" id="main-link">CONTACT</Link>
  </nav>
}

export default Navbar; 