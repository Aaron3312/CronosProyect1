import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [name2, setName2] = React.useState("");


  function handleChange(event) {
    setName(event.target.value);
  }

  function handleChange2(event) {
    setName2(event.target.value);
  }


  return (
    <div className="container">
      <h1>Hello {name} {name2}  </h1>
      <form>
        <input name="name" placeholder="First Name" onChange={handleChange} value={name} />
        <input name="name2" placeholder="Last Name" onChange= {handleChange2} value={name2} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
