# State and Lifecycle
## Class component
##### `Clock.js`
```js
import React from "react";


export default class Clock extends React.Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  tick = () => {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="container">
        <h2>Class component</h2>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    )
  }
}
```


## Functional component
##### `Clock.js`
```js
import React, { useState, useEffect } from "react";


export const ClockFn = () => {
  let timeId = null;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    tick();

    return () => {
      // console.log("ClockFn component is unmount");
      clearInterval(timeId);
    }
  }, [date]);

  const tick = () => {
    timeId = setInterval(() => {
      setDate(new Date());
    }, 1000);
  }

  return (
    <div className="container">
      <h2>Functional component</h2>
      <h3>{date.toLocaleTimeString()}</h3>
    </div>
  )
}
```

## App Component
#### `App.js`
```js
import { Clock } from "./components/Clock";


const App = () => {
  return (
    <Clock />
  )
}

export default App;
```


## Index
#### 'index.js'
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
