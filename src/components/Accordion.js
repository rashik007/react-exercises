// // Display every title of accordion with body.
// // Hide every accordion body using element.display = none;
// // Toggle visibility of accordion body on click of title.
import React, { useRef } from "react";
import AccordionData from "./AccordionData";

function Accordion(props) {
  const [visibilty, setVisibility] = React.useState(
    Array(AccordionData.length).fill(false)
  );
  // const [height, setHeight] = React.useState("0px");

  // const content = useRef(null);
  // console.log(content);

  function changeVisibility(index) {
    const heightCopy = [...visibilty];
    console.log("copied array is: " + heightCopy);

    heightCopy[index] = !visibilty[index];
    setVisibility(heightCopy);
    // setHeight(visibilty === true ? "0px" : `${content.current.scrollHeight}px`);
    // console.log(content.current.scrollHeight);
  }
  return (
    <div className="counter-body">
      <h1>Build Accordion in React</h1>

      <ul className="accordion-body">
        {AccordionData.map((accordionSingle, index) => (
          // console.log(accordionSingle.title)

          <li key={index}>
            <div
              className="accordion-title"
              onClick={() => changeVisibility(index)}
            >
              <h3>{accordionSingle.title}</h3>
              <p> &#62; </p>
            </div>

            <div className="accordion--body">
              <p className={visibilty[index] ? "block" : "none"}>
                {accordionSingle.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accordion;

// import React, { useRef, useState } from "react";
// import AccordionData from "./AccordionData";

// function Accordion(props) {
//   // Initialize an array of visibility states, one for each accordion item
//   const [visibilities, setVisibilities] = useState(
//     Array(AccordionData.length).fill(false)
//   );

//   function changeVisibility(index) {
//     // Create a copy of the visibilities array and toggle the state of the clicked item
//     const newVisibilities = [...visibilities];
//     newVisibilities[index] = !newVisibilities[index];
//     setVisibilities(newVisibilities);
//   }

//   return (
//     <div className="counter-body">
//       <h1>Build Accordion in React</h1>

//       <ul className="accordion-body">
//         {AccordionData.map((accordionSingle, index) => (
//           <li key={accordionSingle.id}>
//             <div
//               className="accordion-title"
//               onClick={() => changeVisibility(index)}
//             >
//               <h3>{accordionSingle.title}</h3>
//               <p> &#62; </p>
//             </div>

//             <div className="accordion--body">
//               <p className={visibilities[index] ? "block" : "none"}>
//                 {accordionSingle.content}
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Accordion;
