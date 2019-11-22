import React from "react";
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
        <header className="App-header">Let's highjack the right click</header>
      </div>
    );
  }
}

export default App;
