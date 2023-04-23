import React from "react"
import "./card.css"

const Card = (props) => {
    return <div id="card"
            style={props.style}
            index={props.ind}>
        <div className="imgContainer">
         <img src={props.src}></img>
        </div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
    </div>
}

export default Card; 
