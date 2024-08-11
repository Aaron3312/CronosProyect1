import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";


function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

function filtro(entry) {
  return entry.id <= 20 && entry.id >= 15;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.filter(filtro).map(entry => ( <Entry key={entry.id} emoji={entry.emoji} name={entry.name} meaning={entry.meaning} /> ))} 
      {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
