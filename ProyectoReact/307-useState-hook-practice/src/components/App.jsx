import React from "react";





function App() {
  let time = new Date().toLocaleTimeString()

  console.log(time);
  
  
  const [times, setTime] = React.useState(time);

  function getTime() {
    let time = new Date().toLocaleTimeString()
    setTime(time);
  }

  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{times}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
