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
  const checkList = [];
  const [checkListItem, setCheckListItem] = React.useState("");

  function takeInput(event) {
    console.log(event.target.value);
    // const inputVal = event.target.value;
    setCheckListItem(event.target.value);
  }
  console.log(checkList);
  console.log(checkListItem);

  return (
    <div className="counter-body">
      <h1>checklist Options</h1>
      <h3 className="">Enter items to add to the chekclist</h3>
      <input type="text" onChange={takeInput} id="getInput" />
      <button>register a checkList</button>
      <ul className="item--entry--checklist">
        {checkList}
        {checkList.map((item, index) => (
          <li className="" id={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
