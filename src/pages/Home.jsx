import React from "react";
import "./home.css"

import profilePic from "../assets/images/profile-pic.jpg"

const styles = {
    dark: {
        wholeDiv: {
            backgroundColor: "black"
        },
        about: {
            backgroundColor: "#fff",
            color: "white"
        }
    },
    light: {
        wholeDiv: {
            backgroundColor: "white"
        },
        about: {
            backgroundColor: "#fff",
            color: "black"
        }
    }
}
const Home = (props) => {
    const {mode} = props; 

    return <div id="home" style={styles[mode]["wholeDiv"]}>
        <div className="imageContainer flexRow">
          <img src={profilePic}/>
        </div>
        <div className="about" style={styles[mode]["about"]}>
            <h3>About The Drawings</h3>
            <p>
                I like to draw black and white illustrations with graphite pencils,
                 pen, and occasionally charcoal. In mixed media pen and pencil 
                drawings, you will see a contrast between the sharp lines of the pen
                 for an 'in focus' look and the softness of the pencil. Pencil only 
                has a warmer feeling, whereas pen only can seem a little cold. 
            </p>
        </div>
    </div>
}

export default Home;