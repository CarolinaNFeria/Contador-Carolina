
import React from 'react'
import ReactDOM from "react-dom"
import SecondsCounter from "./components/SecondsCounter.jsx";
import "../styles/index.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
    this.incrementSeconds = this.incrementSeconds.bind(this);
    this.resetSeconds = this.resetSeconds.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(this.incrementSeconds, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  incrementSeconds() {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1
    }));
  }

  resetSeconds() {
    this.setState({ seconds: 0 });
  }

  render() {
    return (
      <div className="app-container">
        <SecondsCounter seconds={this.state.seconds} digits={6} />
        <button className="reset-button" onClick={this.resetSeconds}>
          Reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));