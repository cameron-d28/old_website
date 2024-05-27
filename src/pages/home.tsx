import React from "react";
import pfp from "../content/pfp.jpeg";
import WheelCircle from "../components/WheelCircle";
import { HoverTypes } from "../components/WheelCircle/types";

const Home = () => {
  const about_links = [
    { link: "/about", title: "about" },
    { link: "/resume", title: "Resume" },
    { link: "https://github.com/cameron-d28", title: "github" },
  ];

  const learn_links = [
    { link: "https://press.stripe.com/", title: "stripe press" },
    { link: "https://www.acquired.fm/", title: "acquired podcast" },
  ];

  const future_links = [
    { link: "/", title: "coming soon" },
    { link: "/", title: "coming soon" },
    { link: "/", title: "coming soon" },
    { link: "/", title: "coming soon" },
  ];

  return (
    <div className="App">
      <header className="app-header">
        <img src={pfp} className="personal-pfp" alt="Profile Pic" />
        <p>cameron davis</p>
        <p>carpe diem</p>
      </header>
      <div className="navigation-body">
        <WheelCircle hovertype={HoverTypes.straight} links={about_links} />
        <WheelCircle hovertype={HoverTypes.straight} links={learn_links} />
        <WheelCircle hovertype={HoverTypes.spiral} links={future_links} />
      </div>
    </div>
  );
};

export default Home;
