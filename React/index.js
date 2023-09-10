*Excercise 1*

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Testing 123</h1>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </div>,
  document.getElementById("root")
);

*Excercise 2*

import React from "react";
import ReactDOM from "react-dom";

const fname = "Jason";
const lname = "Alvarado";
const num = 7;
const food = "spaghetti";
const hobbies = "eat";
const color = "red";
const pet = "dogs";

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p>
      My favorite number is {Math.floor(Math.random() * 5)} and my favorite{" "}
      thing to do is {`${hobbies} ${food}`}. My Favorite color is {color} and I
      also love {pet} .
    </p>
    {/*  {} is needed to when wrapping inside a template literal */}
  </div>,
  document.getElementById("root")
);
