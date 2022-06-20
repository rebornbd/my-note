import React from 'react'
import { SCALE } from './scale';


const TemperatureInput = ({ temperature=0, scale=SCALE.celsius, handleTemperature }) => {
  const styles = {
    minWidth: "100px",
    display: "inline-block"
  }

  return (
    <div>
      {(scale === SCALE.celsius)
        ? <span style={styles}>CELSIUS: </span>
        : <span style={styles}>FAHRENHEIT: </span>
      }
      <input
        onChange={(e) => handleTemperature(e.target.value, scale)}
        value={temperature}
        className="m-5 p-5"
        type='text'
      />
    </div>
  )
}

export default TemperatureInput;
