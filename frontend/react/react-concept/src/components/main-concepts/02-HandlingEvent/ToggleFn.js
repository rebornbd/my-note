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
