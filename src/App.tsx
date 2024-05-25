import React from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";

function App() {
  const path = window.location.pathname;

  switch (path) {
    case "/about":
      return <About />;
    case "/resume":
      return <Resume />;
    default:
      return <Home />;
  }
}

export default App;
