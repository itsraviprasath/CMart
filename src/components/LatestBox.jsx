import React from "react";
import Car1 from "../assets/images/car-3.jpg";

function LatestBox(props) {
  return (
    <>
      <div>
        <div className="latest-car">
          <img className="car-thumbnail" src={Car1} alt="Latest-Car" />
        </div>
        <div className="new-tag">New</div>
        <div className="ling-section">
          <h3>{props.carName}</h3>
          <h5>
            ${props.price} <span>/monthly</span>
          </h5>
        </div>
      </div>
    </>
  );
}

export default LatestBox;
