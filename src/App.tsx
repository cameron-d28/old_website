import React from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   const path = window.location.pathname;

//   switch (path) {
//     case "/about":
//       return <About />;
//     case "/resume":
//       return <Resume />;
//     default:
//       return <Home />;
//   }
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
