// Creating a simple counter using React which increments or decrements count dynamically on-screen as the user clicks on the button. This exercise requires knowledge of fundamental React concepts such as State, Component, etc.

import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  function updateCount(event) {
    const btnText = event.target.innerHTML;
    console.log(btnText);
    setCount((prevCount) => (btnText === "-" ? prevCount - 1 : prevCount + 1));
  }
  return (
    <div className="counter-body">
      <h1>Simple counter exercise</h1>

      <div className="counter">
        <button className="decrement--counter" onClick={updateCount}>
          -
        </button>
        <p className="display--count">{count}</p>
        <button className="increment--counter" onClick={updateCount}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
