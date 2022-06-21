# Lifting State Up

#### helping functions
```js
// scale.js
export const SCALE = {
  celsius: "c",
  fahrenheit: "f"
};

// converter.js
import { SCALE } from "./scale";
function CtoF(temperature) {
  return (temperature * (9/5)) + 32;
}
function FtoC(temperature) {
  return (temperature - 32) * (5/9);
}
export const convert = (temperature, scale) => {
  return (SCALE.celsius === scale)
    ? FtoC(temperature)
    : CtoF(temperature);
}

// BoilingVerdict.js
import React from 'react'
const BoilingVerdict = ({ celsius=0 }) => {
  return (
    <div>
      {(celsius >= 100)
        ? <p className="p-5 bg-green">The water would boil.</p>
        : <p className="p-5 bg-red">The water would not boil.</p>
      }
    </div>
  )
}
export default BoilingVerdict;

// TemperatureInput.js
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
```

## Class component
#### `Calculator.js`
```js
import React from 'react'
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
import { convert } from './converter';
import { SCALE } from './scale'


export default class Calculator extends React.Component {
  state = {
    temperature: '',
    scale: SCALE.celsius
  }

  handleTemperature = (temperature, scale) => {
    this.setState({
      temperature,
      scale
    });
  }


  render() {
    const temperature = (isNaN(parseInt(this.state.temperature)))
      ? 0
      : parseInt(this.state.temperature);

    const celsius = (this.state.scale !== SCALE.celsius)
      ? convert(temperature, SCALE.celsius)
      : temperature;
    const fahrenheit = (this.state.scale !== SCALE.fahrenheit)
      ? convert(temperature, SCALE.fahrenheit)
      : temperature;

    return (
      <div className="p-5 border">
        <h2>Class component</h2>
        <TemperatureInput 
          temperature={celsius}
          scale={SCALE.celsius}
          handleTemperature={this.handleTemperature}
        />
        <TemperatureInput
          temperature={fahrenheit}
          scale={SCALE.fahrenheit}
          handleTemperature={this.handleTemperature}
        />

        <BoilingVerdict celsius={celsius} />
      </div>
    )
  }
}
```


## Functional component
#### `CalculatorFn.js`
```js
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
```
