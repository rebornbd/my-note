# Hooks

## React built-in Hooks
```
useState
useEffect
useContext
useCallback
useMemo
useRef
useReducer
```

### useState
Returns a stateful value, and a function to update it.
```js
const [state, setState] = useState(initialState);


////////////////////
// EXAMPLE
////////////////////
const [count, setCount] = useState(0);
const [counter, setCounter] = useState({ count: 0 });

// synchronous update
setCount(count + 1);
setCounter(counter.count + 1);

// asynchronous update
setCount((prevCount) => prevCount + 1);
setCounter((prevCounter) => ({
  count: prevCounter.count + 1
}))

// NB: It's always better to use asynchronous form update
```


### useEffect
useEffect lets us perform side effects in function components & return a destroy function or not explicitly return any value, implicitly returning undefined.
```js
useEffect(() => {});                // call every render
useEffect(() => {}, []);            // call only 1'st render
useEffect(() => {}, [*]);           // call every render
useEffect(() => {}, [dependency1]); // call only change dependency1 & render
useEffect(() => {}, [dep1, dep2]);  // call only change (dep1 | dep2) & render
useEffect(() => {
  // .......
  // .......

  // return a clean up function
  return () => {

  }
}, []);
```


### useContext
Accepts a context object (the value returned from React.createContext) and returns the current context value.
##### useContext Helps Us Avoid Prop Drilling.
```js
const value = useContext(MyContext);
```


### useCallback
Returns a memoized callback function [& return a new function when changes the dependency]
##### memoized function
```js
const memoizedCallback = useCallback(() => {}, []);
const memoizedCallback = useCallback(() => {}, [dep1, dep2]);

////////////////////
// EXAMPLE
////////////////////
const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <span>Count: {count}</span>
      <button onClick={handleCount}>Increment Count</button>
    </>
  )
}
```


### useMemo
Returns a memoized value [& return a new value when changes the dependency]
```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


////////////////////
// EXAMPLE
////////////////////
const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount1 = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const handleCount2 = useCallback(() => {
    setCount2((prevCount) => prevCount + 1);
  }, []);

  // only re-calculate when count1 is change
  const isCount1Even = useMemo(() => {
    /*
      // do some expensive calculation
      let i = 0;
      while(i <= 100000000) i++;
    */
    return count1 % 2 === 0
      ? true
      : false;
  }, [count1]);

  return (
    <>
      <span>Count1: {count1}</span>
      <span>Count1 is {isCount1Even ? "EVEN" : "ODD"}</span>
      <button onClick={handleCount1}>Increment Count1</button>

      <span>Count2: {count2}</span>
      <button onClick={handleCount2}>Increment Count2</button>
    </>
  )
}
```


### 

```js

```


### 

```js

```
