import React, { useState } from "react";


//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.





function CreateArea(props) {


  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function setNoted(event){
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange= {handleChange} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." onChange= {handleChange} rows="3" value={note.content}/>
        <button onClick={setNoted}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
