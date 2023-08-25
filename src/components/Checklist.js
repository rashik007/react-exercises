// React code to display a checklist with multiple options that can select and
// the selected options are dynamically displayed on the screen. React State is used to
// keep track of checked options and onChange() Event handler is triggered to alter the
// state whenever an option is checked or unchecked.

// The following are the steps to create a Checklist in React JS:

// Create React state to track checkbox value.
// Function to update checkbox value based on event.target.checked
// Add checkbox input element to JSX code with onChange function.

import React from "react";

function Checklist() {
  return (
    <div className="counter-body">
      <h1>checklist Options</h1>
    </div>
  );
}

export default Checklist;
