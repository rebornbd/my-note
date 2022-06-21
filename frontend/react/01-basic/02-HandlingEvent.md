# Handling Events

#### helping functions
```js
// color.js
export const COLORS = {
  RED: "#f77",
  GREEN: "#9f9"
};
```

## Class component
#### `Toggle.js`
```js
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
```

## Functional component
#### `ToggleFn.js`
```js
import React, { useState, useEffect } from "react";
import { COLORS } from "./color";


const ToggleFn = () => {
  const [bg, setBg] = useState(COLORS.RED);


  const handleToggleColor = () => {
    const color = (bg === COLORS.GREEN) ? COLORS.RED : COLORS.GREEN;
    setBg(color);
  }

  return (
    <div className="p-5 border">
      <h2>Functional component</h2>
      <div style={{ height: "50px", backgroundColor: `${bg}` }} />
      <button
        onClick={handleToggleColor}
        className="m-5 p-5">Toggle Color</button>
    </div>
  )
}

export default ToggleFn;
```
