import React from "react";
import animals from  "./data";
import cars from "./practice";
// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
import ReactDOM from "react-dom";

const [honda, tesla] = cars;

console.log(honda.model);
console.log(tesla.model);

const { speedStats: { topSpeed :hondaTopSpeed, zeroToSixty } } = honda;

const { speedStats: { topSpeed :teslaTopSpeed, zeroToSixty: teslaZeroToSixty } } = tesla;

const { coloursByPopularity: [hondaTopColour] } = honda;

const { coloursByPopularity: [teslaTopColour] } = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
//console.log(animals);

// const [cat, dog] = animals;

// console.log(cat);
// console.log(dog);


// const { name, sound } = cat;
// console.log(name);
// console.log(sound);
