import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import Search from "./components/Search";
import Counter from "./components/Counter";
import MapArr from "./components/MapArr";
import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import Checklist from "./components/Checklist";

function App() {
  return (
    <div className="body_wrapper">
      <Search />
      <Counter />
      <MapArr />
      <Accordion />
      <ImageSlider />
      <Checklist />
    </div>
  );
}

export default App;
