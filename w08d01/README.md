# W08D01 - Data Fetching & Other Side Effects

### To Do
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Pure Functions
* Given the same args always returns the same value
* Does not have any side effects

### Side Effect
* Anything that modifies the state of the computer
* Anytime you interact with something outside your program

### Common Side Effects
* writing to standard out
* setting up a web socket connection
* data fetching
* setting timers and intervals
* modifying the DOM directly

```js
let addition = 42;
let user = null;

const addTwo = (num) => {
  user = { username: 'alice' };

  const result = num + addition;
  return result;
};
```

### Use Effect Syntax

```js
useEffect(() => {}); // will be called on EVERY render
useEffect(() => {}, [username]); // will be called on initial render AND only if the value of username changes
useEffect(() => {}, []); // this will only be called on the initial render
```





useState
useEffect
useContext => breakout in w11




CORS = cross-origin resource sharing
react => localhost:3000
server => localhost:8001


