import React from "react";
import "./home.css"

import profilePic from "../assets/images/profile-pic.jpg"

const styles = {
    dark: {
    },
    light: {
    }
}
const Home = (props) => {
    const {mode} = props; 

    return <div id="home">
        <div className="imageContainer flexRow">
          <img src={profilePic}/>
        </div>
    </div>
}

export default Home;