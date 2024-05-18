import React from "react";
import pfp from "./content/pfp.jpeg";
import "./App.css";
import WheelCircle from "./components/WheelCircle";
import { HoverTypes } from "./components/WheelCircle/types";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src={pfp} className="personal-pfp" alt="Profile Pic" />
        <p>cameron davis</p>
        <p>carpe diem</p>
      </header>
      <div className="app-body">
        <WheelCircle hovertype={HoverTypes.straight} />
      </div>
    </div>
  );
}

export default App;
