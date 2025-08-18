import "../../styles/index.css";

function SecondsCounter({ seconds }) {
  return (
    <div className="counter-wrapper">
      <h1 className="title">⏱ Contador de Segundos</h1>
      <div className="counter-display">
        {seconds}
      </div>
      <p className="subtitle">Tiempo desde que cargó la página</p>
    </div>
  );
}

export default SecondsCounter;