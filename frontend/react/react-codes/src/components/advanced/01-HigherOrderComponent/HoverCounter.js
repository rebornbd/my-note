import React from 'react';
import withCounter from './withCounter';


const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Mouse hovered {count} times</h1>
    </div>
  )
}

export default withCounter(HoverCounter);
