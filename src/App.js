import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import Search from "./components/Search";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="body_wrapper">
      <Search />
      <Counter />
    </div>
  );
}

export default App;
