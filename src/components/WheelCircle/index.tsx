import React, { useState } from "react";
import "./WheelCircle.css";
import { HoverTypes, LinkProps } from "./types";
import { getStyling } from "./funcs";

interface HoverProps {
  hovertype: HoverTypes;
  links: LinkProps[];
  location?: {
    x: number;
    y: number;
  };
  style?: React.CSSProperties; // Added style prop
}

const WheelCircle = ({ hovertype, links, location, style }: HoverProps) => {
  const floaters = links.length;

  // create a variable that tracks if the floater is being hovered over
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    // body for the floating elements to work within
    <div
      className="wheel-body"
      style={{
        position: "absolute",
        // left: location?.x,
        // top: location?.y,
        // transform: "translate(-50%, -50%)",
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* element that triggers animations on float */}
      <div className="wheel-circle" />
      {links.map((link, i) => {
        // function to call for styling that returns the correct string to put in style
        const styling = getStyling(hovertype, i, floaters);

        const onClick = () => {
          handleHover();
          window.location.href = link.href;
        };

        return (
          // Apply 'animate' class when hover is true
          <div
            key={i}
            className={`floater ${hover ? hovertype : ""}`}
            style={styling as React.CSSProperties}
            onClick={onClick}
          >
            <p>{link.label}</p>
          </div>
        );
      })}
      {/* visual representation of the circle */}
      {/* <div className="inner-circle" /> */}
    </div>
  );
};

export default WheelCircle;
