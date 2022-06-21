import React from "react";
import { COLORS } from "./color";


export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: COLORS.GREEN
    };

    // this.handleToggleColor = this.handleToggleColor.bind(this);
  }

  handleToggleColor = () => {
    this.setState((prevState) => {
      const color = (prevState.bg === COLORS.GREEN) ? COLORS.RED : COLORS.GREEN;
      return {
        bg: color
      }
    });
  }

  render() {
    return (
      <div className="p-5 border">
        <h2>Class component</h2>
        <div style={{ height: "50px", backgroundColor: `${this.state.bg}` }} />
        <button
          onClick={this.handleToggleColor}
          className="m-5 p-5">Toggle Color</button>
      </div>
    )
  }
}
