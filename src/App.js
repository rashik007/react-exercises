import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import Search from "./components/Search";
import Counter from "./components/Counter";
import MapArr from "./components/MapArr";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="body_wrapper">
      <Search />
      <Counter />
      <MapArr />
      <Accordion />
    </div>
  );
}

export default App;
