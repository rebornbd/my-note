import React from 'react';


const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  )
}

export default ClickCounter;
