
import React from 'react'
import ReactDOM from "react-dom"
import SecondsCounter from "./components/SecondsCounter.jsx";
import "../styles/index.css";

let seconds = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));
function renderCounter() {
  root.render(
    <SecondsCounter
      seconds={seconds}
      onReset={() => {
        seconds = 0;
      }}
    />
  );
}

setInterval(() => {
  seconds++;
  renderCounter();
}, 1000);

renderCounter();


ReactDOM.render(<Main />, document.getElementById("root"));