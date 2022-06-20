import React from "react";


export default class Clock extends React.Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  tick = () => {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="p-5 border">
        <h2>Class component</h2>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    )
  }
}
