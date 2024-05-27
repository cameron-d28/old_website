import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "../reportWebVitals";
import Resume from "../components/resume";
import "../App.css";

const aboutElement = document.getElementById("resume-root") as HTMLElement;

if (aboutElement) {
  const about = ReactDOM.createRoot(aboutElement);
  about.render(
    <React.StrictMode>
      <Resume />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
