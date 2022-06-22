# Higher-Order Components
```
A HOC is a FUNCTION that takes a COMPONENT as parameter & returns a new COMPONENT.

WHY WE NEED HOC:
Shared common functionality & use it any component.
```

## HOC create
#### `withCounter.js`
```js
import React from 'react'


const withCounter = (Counter) => {
  class WithCounter extends React.Component {
    state = {
      count: 0
    };

    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
      const { count } = this.state;

      return (
        <Counter count={count} incrementCount={this.incrementCount} />
      )
    }
  }

  return WithCounter;
}

export default withCounter;
```


## HOC use
#### `.js`
```js
// ClickCounter.js
import React from 'react';
import withCounter from './withCounter';
const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  )
}
export default withCounter(ClickCounter);

// HoverCounter.js
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
```
