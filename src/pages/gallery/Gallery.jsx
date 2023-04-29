import React, {useState} from "react";
import Card from "./Card.jsx";

import imageList from "../../images.jsx"
import "./gallery.css"

const styles = {
  // dark and light mode using hook
    dark: {
      wholeGallery: {color: "white",
      backgroundColor: "black"}, 
    wholeCard: {border: "none",
      backgroundColor: "black"}
    }, 
    light: {
      wholeGallery: {color: "black",
      backgroundColor: "#a5a5a5"}, 
      wholeCard: {border: "5px solid black",
      backgroundColor: "white"},
      // layouts, localised state only
    }, 
    classic: {
        layout: {gridTemplateColumns: "repeat(2, 50%)"},
        cardBody: {display: "block"}   
    }, 
    mini: {
        layout: {gridTemplateColumns: "repeat(4, 25%)"},
        cardBody: {display: "none"}
    }
}

const Gallery = (props) => {
    const mode = props.mode
    const [layout, setLayout] = useState("classic")

    return <div id="gallery" 
          style={{ ...styles[mode]["wholeGallery"]}}
        >
        <h1>Gallery</h1>
        <button onClick={() => {setLayout("classic")}}>
            Classic</button>
        <button onClick={() => {setLayout("mini")}}>
            Mini</button>

        <div className="galleryGrid"
        style={styles[layout]["layout"]}>
            {imageList.map((img, ind) => {
            return <Card src={img.src} 
            title={img.title} 
            description={img.description}
            key={ind} index={ind}
            style={styles[mode]["wholeCard"]}
            cardStyle={styles[layout]["cardBody"]}
            />
        })}</div>
    </div>
}

export default Gallery;