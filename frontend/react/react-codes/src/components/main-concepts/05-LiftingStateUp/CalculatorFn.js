import React, { useState, useEffect } from 'react'
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
import { convert } from './converter';
import { SCALE } from './scale'


const CalculatorFn = () => {
  const [temperatureInput, setTemperatureInput] = useState('');
  const [scale, setScale] = useState(SCALE.celsius);

  const handleTemperature = (temperature, scale) => {
    setTemperatureInput(temperature);
    setScale(scale);
  }


  const temperature = (isNaN(parseInt(temperatureInput)))
      ? 0
      : parseInt(temperatureInput);

  const celsius = (scale !== SCALE.celsius)
      ? convert(temperature, SCALE.celsius)
      : temperature;
  const fahrenheit = (scale !== SCALE.fahrenheit)
      ? convert(temperature, SCALE.fahrenheit)
      : temperature;

  return (
    <div className="p-5 border">
      <h2>Functional component</h2>
      <TemperatureInput 
        temperature={celsius}
        scale={SCALE.celsius}
        handleTemperature={handleTemperature}
      />
      <TemperatureInput
        temperature={fahrenheit}
        scale={SCALE.fahrenheit}
        handleTemperature={handleTemperature}
      />

      <BoilingVerdict celsius={celsius} />
    </div>
  )
}

export default CalculatorFn;
