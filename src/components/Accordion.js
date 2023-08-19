// Display every title of accordion with body.
// Hide every accordion body using element.display = none;
// Toggle visibility of accordion body on click of title.
import React from "react";

function Accordion() {
  const [visibilty, setVisibility] = React.useState(false);

  function changeVisibility() {
    setVisibility((prevVisibility) => !prevVisibility);
    console.log("div was clicked");
  }
  return (
    <div className="counter-body">
      <h1>Build Accordion in React</h1>

      <ul className="accordion-body">
        <li>
          <div className="accordion-title" onClick={changeVisibility}>
            <h3>Title for accordion1</h3>
            <p> &#62; </p>
          </div>
          <div className="accordion--body">
            <p className={visibilty ? "block" : "none"}>
              Nisi sunt dolore do minim adipisicing. In Lorem culpa enim
              voluptate do aliquip exercitation labore laboris ullamco. Cillum
              deserunt labore nostrud laboris aute aute non cupidatat ipsum
              officia ut minim.
            </p>
          </div>
        </li>
        <li>
          <div className="accordion-title" onClick={changeVisibility}>
            <h3>Title for accordion1</h3>
            <p> &#62; </p>
          </div>
          <div className="accordion--body">
            <p className={visibilty ? "block" : "none"}>
              Nisi sunt dolore do minim adipisicing. In Lorem culpa enim
              voluptate do aliquip exercitation labore laboris ullamco. Cillum
              deserunt labore nostrud laboris aute aute non cupidatat ipsum
              officia ut minim.
            </p>
          </div>
        </li>
        <li>
          <div className="accordion-title" onClick={changeVisibility}>
            <h3>Title for accordion1</h3>
            <p> &#62; </p>
          </div>
          <div className="accordion--body">
            <p className={visibilty ? "block" : "none"}>
              Nisi sunt dolore do minim adipisicing. In Lorem culpa enim
              voluptate do aliquip exercitation labore laboris ullamco. Cillum
              deserunt labore nostrud laboris aute aute non cupidatat ipsum
              officia ut minim.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Accordion;
