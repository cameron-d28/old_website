import React from "react";
import "./WheelCircle.css";

const WheelCircle = () => {
  const floaters = 3;
  const wheelCircle = document.querySelector(".wheel-circle");
  const floater = document.querySelector(".floater");

  if (wheelCircle && floater) {
    wheelCircle.addEventListener("mouseleave", function () {
      floater.classList.add("deactivate");
    });

    wheelCircle.addEventListener("mouseenter", function () {
      floater.classList.remove("deactivate");
    });
  }

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
