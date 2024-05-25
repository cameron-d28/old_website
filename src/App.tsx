import React from "react";
import "./App.css";
import Home from "./pages/home";

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

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return <Home />;
}

export default App;
