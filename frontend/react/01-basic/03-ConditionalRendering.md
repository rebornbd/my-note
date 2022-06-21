# Conditional Rendering

#### helping functions
```js
// Adult.js
import React from "react";
export const Adult = ({ age=0 }) => {
  return (
    <div className="m-5 p-10 bg-red">
      <p>Your age is {age} and you are Adult.</p>
    </div>
  )
}

// Teenage.js
import React from "react";
export const Teenage = ({ age=0 }) => {
  return (
    <div className="m-5 p-10 bg-green">
      <p>Your age is {age} and you are Teenage.</p>
    </div>
  )
}

// Error.js
import React from "react";
export const Error = () => {
  return (
    <div className="m-5 p-10 bg-error">
      <p>Enter a valid number!</p>
    </div>
  )
}
```

## Class component
#### `AgeCalculator.js`
```js
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
```


## Functional component
#### `AgeCalculatorFn.js`
```js
import React, { useState, useEffect } from "react";

import { Teenage } from "./Teenage";
import { Adult } from "./Adult";
import { Error } from "./Error";


const AgeCalculatorFn = () => {
  const [age, setAge] = useState('0');
  
  
  const handleOnChange = (age) => {
    setAge(age);
  }

  
  return (
    <div className="p-5 border">
      <h2>Functional component</h2>
      <input 
        onChange={(e) => handleOnChange(e.target.value)}
        className="p-5"
        placeholder="Enter your age"
        type="text"
      />

      {(isNaN(parseInt(age)))
        ? <Error />
        : (parseInt(age) >= 18)
          ? <Adult age={parseInt(age)} />
          : <Teenage age={parseInt(age)} />
      }
    </div>
  )
}

export default AgeCalculatorFn;
```
