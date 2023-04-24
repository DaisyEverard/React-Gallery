import React, {useState} from "react";
import Card from "./Card.jsx";

import imageList from "../../images.jsx"
import "./gallery.css"

const styles = {
    classic: {
        wholeGallery: {color: "black",
          backgroundColor: "#a5a5a5"}, 
        wholeCard: {border: "5px solid black",
          backgroundColor: "white"},
        layout: {gridTemplateColumns: "repeat(2, 50%)"},
        cardBody: {display: "block"}   
    }, 
    mini: {
        wholeGallery: {color: "white",
          backgroundColor: "black"}, 
        wholeCard: {border: "none",
          backgroundColor: "black"},
        layout: {gridTemplateColumns: "repeat(4, 25%)"},
        cardBody: {display: "none"}
    },
    noLabels: {
        wholeGallery: {color: "white",
          backgroundColor: "black"}, 
        wholeCard: {border: "5px solid black",
          backgroundColor: "black"}, 
        layout: { gridTemplateColumns: "50% 50%"},
        cardBody: {display: "none"}
    }
}

const Gallery = () => {
    const [layout, setLayout] = useState("classic")

    return <div id="gallery" style={styles[layout]["wholeGallery"]}>
        <h1>Gallery</h1>
        <button onClick={() => {setLayout("classic")}}>
            Classic</button>
        <button onClick={() => {setLayout("mini")}}>
            Mini</button>
        <button onClick={() => {setLayout("noLabels")}}>
            No Labels</button>

        <div className="galleryGrid"
        style={styles[layout]["layout"]}>
            {imageList.map((img, ind) => {
            return <Card src={img.src} 
            title={img.title} 
            description={img.description}
            key={ind} index={ind}
            style={styles[layout]["wholeCard"]}
            cardStyle={styles[layout]["cardBody"]}
            />
        })}</div>
    </div>
}

export default Gallery;