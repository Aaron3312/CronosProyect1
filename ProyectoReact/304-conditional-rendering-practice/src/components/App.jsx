import React from "react";
import Form from "./Form";

var userIsRegistered = false;
var IsSecret = false;

const secretStlye = {color: "red", textDecoration: "line-through"}

function IsSecretFunction(IsSecret) {
  if (!IsSecret) {
    return null
  } else {
    return secretStlye
  }
}

function strike(IsSecret) {
  IsSecret = true
}

function unStrike(IsSecret) {
  IsSecret = false
}


function App() {
  return (
    <div className="container">
      <Form userIsRegistered= {userIsRegistered}/>
      <p style = {IsSecretFunction(IsSecret)}>Note: The password is "12345"</p>
      <button onClick={strike(IsSecret)}>Show</button>
      <button onClick={unStrike(IsSecret)}>Hide</button>
    </div>
  );
}

export default App;
