import React from "react";

import { Teenage } from "./Teenage";
import { Adult } from "./Adult";
import { Error } from "./Error";


export default class AgeCalculator extends React.Component {
  state = {
    age: '0'
  }

  handleOnChange = (age) => {
    this.setState({ age });
  }

  render() {
    let parseAge, error;
    parseAge = parseInt(this.state.age);
    (isNaN(parseAge)) ? error = true : error = false;

    return (
      <div className="p-5 border">
        <h2>Class component</h2>
        <input 
          onChange={(e) => this.handleOnChange(e.target.value)}
          className="p-5"
          placeholder="Enter your age"
          type="text"
        />

        {(error)
          ? <Error />
          : (parseAge && parseAge >= 18)
            ? <Adult age={parseAge} />
            : <Teenage age={parseAge} />
        }
      </div>
    )
  }
}
