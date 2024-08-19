import React from "react";




function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onChanges} type="text" value={props.inputText} />
      <button onClick={props.onAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
