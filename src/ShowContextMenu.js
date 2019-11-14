import React from "react";

class ShowContextMenu extends React.Component {
  state = { isMenuVisible: false, selectedOption: "" };

  componentDidMount() {
    if (this.props.showMenu) {
      this.setState({ isMenuVisible: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showMenu === this.props.showMenu) {
      return;
    } else if (this.props.showMenu) {
      this.setState({ isMenuVisible: true });
    } else {
      this.setState({ isMenuVisible: false });
    }
  }

  show = () => {
    this.setState({ isMenuVisible: true });
  };
  handleOptionClick = option => {
    this.setState({ selectedOption: option });
  };
  render() {
    return (
      <div>
        {this.state.isMenuVisible ? (
          <div className="context-menu">
            <ul>
              <li
                className="option"
                onClick={() => this.handleOptionClick("option1")}
              >
                option 1
              </li>
              <li
                className="option"
                onClick={() => this.handleOptionClick("option2")}
              >
                option 2
              </li>
              <li
                className="option"
                onClick={() => this.handleOptionClick("option3")}
              >
                option 3
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ShowContextMenu;
