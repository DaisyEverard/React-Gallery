import React from "react";
import Card from "./Card.jsx";
import imageList from "../../images.jsx"

const frame1 = "css grid?"

const Gallery = () => {
    return <div id="gallery">
        {imageList.map((img, ind) => {
            return <Card src={img.src} 
            title={img.title} 
            description={img.description}
            key={ind}/>
        })}
    </div>
}

export default Gallery;