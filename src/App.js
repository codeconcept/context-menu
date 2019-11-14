import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowContextMenu from "./ShowContextMenu";

class App extends React.Component {
  state = { hasRightClicked: false };
  handleRightClick = e => {
    e.preventDefault();
    this.setState({ hasRightClicked: true });
  };
  handleLeftClick = () => {
    this.setState({ hasRightClicked: false });
  };
  render() {
    return (
      <div
        className="App"
        onContextMenu={this.handleRightClick}
        onClick={this.handleLeftClick}
      >
        <ShowContextMenu showMenu={this.state.hasRightClicked} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
