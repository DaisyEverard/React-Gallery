import React from "react"

const Card = (props) => {
    return <div id="card" className="flexColumn"
            style={props.style}
            index={props.ind}>
        <div className="imgContainer">
         <img src={props.src}></img>
        </div>
        <div className="cardBody" style={props.cardStyle}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        </div>
    </div>
}

export default Card; 
