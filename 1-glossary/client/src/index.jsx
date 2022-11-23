import React from "react";
import { render } from "react-dom";
import App from "./components/App.jsx"

let words = [
  {word: 'dog', definition: 'Four legged friend'},
  {word: 'cat', definition: 'Enemy of dog'},
  {word: 'Hello', definition: 'Standard greeting'}
]

render(<App />, document.getElementById('root'));
