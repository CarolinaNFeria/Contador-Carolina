import React from "react";


const SecondsCounter = ({ seconds, onReset }) => {
  const digits = seconds.toString().padStart(6, "0").split("");
  
  return (
    <div className="counter-container">
      <div className="counter-box icon">
        ⏱
      </div>
     {digits.map((digit, index) => (
        <div key={index} className="counter-box">
          {digit}
        </div>
      ))}

      <button className="reset-btn" onClick={onReset}>
        Reiniciar
      </button>

    </div>
  );
};

export default SecondsCounter;