import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function notelist(notes1) {
  return  (
    <Note 
    key={notes1.key} 
    title={notes1.title} 
    content={notes1.content} />
  );
}


function App() {
  return (
    <div>
      <Header />
      {notes.map(notelist)}
      <Footer />
    </div>
  );
}

export default App;
