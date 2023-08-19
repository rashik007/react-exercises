// Creating a simple counter using React which increments or decrements
// count dynamically on-screen as the user clicks on the button.
// This exercise requires knowledge of fundamental React concepts such as State, Component, etc.

import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  function updateCounter(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <h1> Simple counter exercise</h1>

      <div className="count_html">
        <button className="increment_counter" onClick={updateCounter}>
          +
        </button>
        <button className="display_result">{count}</button>
        <button className="decrement_counter" onClick={updateCounter}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
