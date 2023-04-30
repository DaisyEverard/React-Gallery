import React from "react";
import "./cssmation.css"

const flower = (rotate, borderColor, left, top) => {
    return   <div className={"flower " + rotate}
      style={{left: left, top: top}}>
    <div className="petal six-one"
      style={{borderColor: borderColor}}></div>
    <div className="petal six-two"
      style={{borderColor: borderColor}}></div>
    <div className="petal six-three"
      style={{borderColor: borderColor}}></div>
    <div className="petal six-four"
      style={{borderColor: borderColor}}></div>
    <div className="petal six-five"
      style={{borderColor: borderColor}}></div>
    <div className="petal six-six"
      style={{borderColor: borderColor}}></div>
</div>
}

const CSSmation = () => {
    return <div id="cssMation">
        {flower("rotate-360-middle", "red", "120px", "400px")}
        {flower("rotate-60-middle", "pink", "20px", "250px")}
        {flower("rotate-360-middle", "blue", "250px", "270px")}
        {flower("resize", "orange", "290px", "450px")}
    </div>
}

export default CSSmation;