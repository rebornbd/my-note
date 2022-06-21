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
