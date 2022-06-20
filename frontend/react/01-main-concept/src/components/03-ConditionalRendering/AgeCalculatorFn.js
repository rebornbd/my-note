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
