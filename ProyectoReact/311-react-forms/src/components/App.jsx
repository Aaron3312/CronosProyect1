import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [dead, setDead] = React.useState("");

  function handleChange(event) {
    console.log("Changed");
    console.log(event.target.value);
    setName(event.target.value);
  }

  function clickedChange(event) {
    console.log("Clicked");
    setDead(name);
  }
  
  return (
    <div className="container">
      <h1>Hello {dead}</h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />
      <button onClick={clickedChange}>Submit</button>
    </div>
  );
}

export default App;
