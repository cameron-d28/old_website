import React, { useState } from "react";
import "./WheelCircle.css";
import { HoverTypes } from "./types";
import { getStyling } from "./funcs";

interface HoverProps {
  hovertype: HoverTypes;
}

const WheelCircle = ({ hovertype }: HoverProps) => {
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
        // funtion to call for styling that returns the correct string to put in style
        const styling = getStyling(hovertype, i, floaters);

        const onClick = () => {
          console.log("clicked a link");
        };

        return (
          // Apply 'animate' class when hover is true
          <div
            key={i}
            className={`floater ${hover ? hovertype : ""}`}
            style={styling as React.CSSProperties}
            onClick={onClick}
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
