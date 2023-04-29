import React from "react";
import Navbar from "./Navbar";
import "./Header.css"

import ivyFence from "../assets/images/ivy_fence.jpg"
import catkins from "../assets/images/catkins.jpg"

const styles = {
  dark: {
    wholeDiv: {
      backgroundImage: `url(${ivyFence})`
    }, 
    button: { 
      backgroundColor: "black",
      color: "white"}
  },
  light: {
    wholeDiv: {
      backgroundImage: `url(${catkins})`
    },
    button: {
      backgroundColor: "white",
      color: "black"
    }
  }
}

const Header = (props) => {
  const {mode, toggleMode} = props
  
  const iconUrl = () => {
    if (mode === "dark") {
      return <i className="ri-lightbulb-fill"></i>
    } else {
      return <i className="ri-lightbulb-line"></i>
    }
  }

    return <div id="header" style={styles[mode]["wholeDiv"]}>
        <div className="bg-fade">
            <h1>Graphart</h1>
            <button className="flexColumn" style={styles[mode]["button"]} onClick={(e) => {toggleMode()}}>
              {iconUrl()}
            </button>
          <Navbar mode={mode}/>
        </div>
    </div>
}

export default Header