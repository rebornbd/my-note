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
useEffect(() => {});
useEffect(() => {}, []);
useEffect(() => {}, [*]);
useEffect(() => {}, [dependency1]);
useEffect(() => {}, [dep1, dep2]);
useEffect(() => {
  // .......
  // .......

  // return a clean up function
  return () => {

  }
}, []);
```


### 

```js
```
