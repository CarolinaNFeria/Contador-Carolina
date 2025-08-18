
import React from 'react'
import ReactDOM from 'react-dom/client'
import SecondsCounter from "./components/SecondsCounter.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

let counter = 0;

setInterval(() => {
  counter++;
  root.render(<SecondsCounter seconds={counter} />);
}, 1000);
