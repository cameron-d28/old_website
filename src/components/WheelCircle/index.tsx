import React from "react";
import "./WheelCircle.css";

const WheelCircle = () => {
  // const floaters = 3;

  return (
    <div className="wheel-body">
      <div className="wheel-circle" />
      {/* {Array.from({ length: floaters }).map((_, i) => (
        <div key={i} className="floater" />
      ))} */}
      <div className="floater" />
      <div className="inner-circle" />
    </div>
  );
};

export default WheelCircle;
