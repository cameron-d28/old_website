import React from "react";
import pfp from "../content/pfp.jpeg";
import WheelCircle from "../components/WheelCircle";
import { HoverTypes } from "../components/WheelCircle/types";

const Home = () => {
  const links = [
    { link: "/about", title: "about" },
    { link: "/resume", title: "Resume" },
    { link: "https://github.com/cameron-d28", title: "github" },
  ];

  return (
    <div className="App">
      <header className="app-header">
        <img src={pfp} className="personal-pfp" alt="Profile Pic" />
        <p>cameron davis</p>
        <p>carpe diem</p>
      </header>
      <div className="navigation-body">
        <WheelCircle hovertype={HoverTypes.straight} links={links} />
        <WheelCircle hovertype={HoverTypes.straight} links={links} />
        <WheelCircle hovertype={HoverTypes.straight} links={links} />
      </div>
    </div>
  );
};

export default Home;
