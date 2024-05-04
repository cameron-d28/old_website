import React from "react";
import pfp from "./content/pfp.jpeg";
import "./App.css";
import WheelCircle from "./components/WheelCircle";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src={pfp} className="personal-pfp" alt="Profile Pic" />
        <p>cameron davis</p>
        <p>carpe diem</p>
      </header>
      <div className="app-body">
        <WheelCircle />
      </div>
    </div>
  );
}

export default App;
