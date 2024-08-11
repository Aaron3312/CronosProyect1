import React from "react";
import Login from "./Login";

var isloggedIn = true;

function renderConditionally(){
  if (isloggedIn === true){
    return <h1>Hello</h1>
  } else {
    return ( <Login /> )
  }
}

const currentTime = new Date().getSeconds();
console.log(currentTime);



function App() {
//  return <div className="container"> {isloggedIn ? <h1>Hello!</h1> : <Login />} </div>
  return <div className="container"> {(currentTime%2) === 0 && currentTime > 30 ? <h1>why are u still working?</h1> : <h1>why are u still sleeping?</h1>} </div>
}

export default App;
