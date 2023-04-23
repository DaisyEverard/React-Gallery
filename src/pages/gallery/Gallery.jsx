import React, {useState} from "react";
import Card from "./Card.jsx";

import imageList from "../../images.jsx"

const frame1 = "css grid?"
const styles = {
    classic: {
        main: {borderColor: "orange"},
        layout: {gridTemplateColumns: "repeat(2, 50%)",
        gridTemplateRows: "auto"}   
    }, 
    grid: {
        main: {borderColor: "pink"},
        layout: { gridTemplateColumns: "60% 40%",
        gridTemplateRows: "60% 40%"}
    },
    flip: {
        main: {borderColor: "yellow"}, 
        layout: { gridTemplateColumns: "40% 60%",
        gridTemplateRows: "40% 60%"}
    }
}

const Gallery = () => {
    const [layout, setLayout] = useState("classic")

    return <div id="gallery">
        <h1>Gallery</h1>
        <button onClick={() => {setLayout("classic")}}>
            Classic</button>
        <button onClick={() => {setLayout("grid")}}>
            Grid</button>
        <button onClick={() => {setLayout("flip")}}>
            Flip</button>

        <div className="galleryGrid"
        style={{...styles[layout]["layout"], display: "grid"}}>{imageList.map((img, ind) => {
            return <Card src={img.src} 
            title={img.title} 
            description={img.description}
            key={ind} index={ind} style={styles[layout]["main"]}/>
        })}</div>
    </div>
}

export default Gallery;