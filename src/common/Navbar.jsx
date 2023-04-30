import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const {mode} = props;

  const styles = {
    dark: {
      color: "white",
      backgroundColor: "#5f5f5f"
    },
    light: {
      color: "black",
      backgroundColor: "#dadada"
    }
}

    return <nav>
        <Link to="/" 
          className="nav-link" 
          id="info-link"
          style={styles[mode]}>
          HOME</Link>
        <Link to="/gallery" 
          className="nav-link" 
          id="main-link"
          style={styles[mode]}>
          GALLERY</Link>
        <Link to="/cssmation" 
          className="nav-link" 
          id="main-link"
          style={styles[mode]}
          >CSSMATION</Link>
  </nav>
}

export default Navbar; 