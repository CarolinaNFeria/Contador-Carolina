import React from "react";


function SecondsCounter({ seconds, digits = 6 }) {
  const paddedSeconds = String(seconds).padStart(digits, "0");
  const digitArray = paddedSeconds.split("");

  return (
    <div className="counter-wrapper">
      <h1 className="title">Contador de Segundos</h1>
      <div className="counter-display">
        {digitArray.map((d, i) => (
          <div key={i} className="digit-box">
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondsCounter;