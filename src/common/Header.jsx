import React from "react";
import Navbar from "./Navbar";
import "./Header.css"

const Header = () => {
    return <div id="header">
        <div className="bg-fade">
          <h1>Header</h1>
          <Navbar />
        </div>
    </div>
}

export default Header