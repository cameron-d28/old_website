import React, { useState } from "react";
import "./WheelCircle.css";

const WheelCircle = () => {
  const floaters = 3;

  // create a variable that tracks if the floater is being hovered over
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    // body for the floating elements to work within
    <div className="wheel-body">
      {/* element that triggers animations on float */}
      <div
        className="wheel-circle"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
      {Array.from({ length: floaters }).map((_, i) => {
        let ratio = i / floaters;
        let angle = ratio * 360;
        return (
          // Apply 'animate' class when hover is true
          <div
            key={i}
            className={`floater ${hover ? "animate" : ""}`}
            style={{ "--rotate": `${angle}deg` } as React.CSSProperties}
          >
            <p>test</p>
          </div>
        );
      })}
      {/* <div className="floater" /> */}
      {/* visual representationof the circle */}
      <div className="inner-circle" />
    </div>
  );
};

export default WheelCircle;
