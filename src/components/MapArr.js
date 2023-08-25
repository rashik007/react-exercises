import React from "react";
import Data from "../Data.js";

function MapArr() {
  const [data, setData] = React.useState(Data);
  function mapArray() {
    return data.map((item, index) => <li key={index}>{item}</li>);
  }

  // console.log(data);
  return (
    <div className="counter-body">
      <h1>Display a list in React</h1>
      <ul className="list">{mapArray()}</ul>
    </div>
  );
}

export default MapArr;
