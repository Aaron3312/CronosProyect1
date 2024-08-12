import React, {useState} from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setOnMouse] = useState(false);



  function handleClick() {
    console.log("Button clicked");
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setOnMouse(true);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: !isMouseOver ? "white" : "black"}} onMouseOver={handleMouseOver} onMouseOut={() => setOnMouse(false)} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
