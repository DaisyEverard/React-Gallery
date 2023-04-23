import React, {useState} from "react";
import Card from "./Card.jsx";
import imageList from "../../images.jsx"

const frame1 = "css grid?"
const styles = {
    classic: {
            borderColor: "orange"
    }, 
    grid: {
        borderColor: "pink"
    },
    flip: {
        borderColor: "yellow"
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

        {imageList.map((img, ind) => {
            return <Card src={img.src} 
            title={img.title} 
            description={img.description}
            key={ind} index={ind} style={styles[layout]}/>
        })}
    </div>
}

export default Gallery;