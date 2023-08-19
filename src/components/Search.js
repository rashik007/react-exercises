import React from "react";
import Data from "../Data";

function Search() {
  const [items, setItems] = React.useState(Data);
  const [filteredItems, setFilteredItems] = React.useState(Data);

  function filterFruit(event) {
    // console.log(event.target.value);
    const searchQuery = event.target.value.toLowerCase();
    const filteredItems = items.filter((mm) =>
      mm.toLowerCase().includes(searchQuery)
    );
    setFilteredItems(filteredItems);
  }
  // console.log(items);
  return (
    <div className="search-body">
      <input
        className="input-search"
        type=""
        id="search--data--item"
        placeholder="enter a name of fruit to search"
        onChange={filterFruit}
        name=""
      />

      <ul className="list_suggestion">
        {filteredItems &&
          filteredItems.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

      {/* <div>{suggestions}</div> */}
    </div>
  );
}

export default Search;
