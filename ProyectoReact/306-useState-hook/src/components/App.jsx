import React from "react";


function App() {

const [count, setCount] = React.useState(0);

const [count2, setCount2] = React.useState(0);

const [red, green, blue] = [9,132,227];


function increase() {
  setCount(count + 1);

}


  return(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase} >+</button>
    <button onClick={() => setCount(count - 1)} >-</button>
    <h1>{count2}</h1>
    <button onClick={() => setCount2(count2 + 1)} >+</button>
    <button onClick={() => setCount2(count2 - 1)} >-</button>
  </div>
  );


}

export default App;
