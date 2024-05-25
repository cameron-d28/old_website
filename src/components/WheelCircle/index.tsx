import React, { useState } from "react";
import "./WheelCircle.css";
import { HoverTypes, LinkProps } from "./types";
import { getStyling } from "./funcs";

interface HoverProps {
  hovertype: HoverTypes;
  links: LinkProps[];
}

const WheelCircle = ({ hovertype, links }: HoverProps) => {
  const floaters = links.length;

  // create a variable that tracks if the floater is being hovered over
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    // body for the floating elements to work within
    <div
      className="wheel-body"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {/* element that triggers animations on float */}
      <div className="wheel-circle" />
      {links.map((link, i) => {
        // function to call for styling that returns the correct string to put in style
        const styling = getStyling(hovertype, i, floaters);

        const onClick = () => {
          handleHover();
          window.location.href = link.link;
        };

        return (
          // Apply 'animate' class when hover is true
          <div
            key={i}
            className={`floater ${hover ? hovertype : ""}`}
            style={styling as React.CSSProperties}
            onClick={onClick}
          >
            <p>{link.title}</p>
          </div>
        );
      })}
      {/* <div className="floater" /> */}
      {/* visual representation of the circle */}
      <div className="inner-circle" />
    </div>
  );
};

export default WheelCircle;
