# Render Props
```
A technique or pattern for sharing code between React components using a prop whose value is a function.
```

#### helping functions
```js
// ClickCounter.js
const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  )
}
export default ClickCounter;


// HoverCounter.js
const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    </div>
  )
}
export default HoverCounter;
```

## (Option-01) Render Prop component | (Props)
#### `Counter.js`
```js
// DEFINATION
import React, { useState } from 'react';
const Counter = ({ render }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return render(count, incrementCount);
}
export default Counter;

// USING
// App.js
import React from 'react';
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <Counter
        render={
          (count, incrementCount) => (
            <ClickCounter
              count={count}
              incrementCount={incrementCount}
            />
          )
        }
      />

      <Counter
        render={
          (count, incrementCount) => (
            <HoverCounter
              count={count}
              incrementCount={incrementCount}
            />
          )
        }
      />
    </>
  )
}

export default App;
```


## (Option-02) Render Prop component | (children)
#### `Counter.js`
```js
// DEFINATION
import React, { useState } from 'react';
const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return children(count, incrementCount);
}
export default Counter;

// USING
// App.js
import React from 'react';
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
          />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
          />
        )}
      </Counter>
    </>
  )
}

export default App;
```
