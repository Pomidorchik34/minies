import React, { useState } from "react";
import Tabs from "./Components/Tabs";
import Like from "./Components/Likes and Dislikes";
import Random from "./Components/random";
import "./App.css";

function App() {
  const [counterState, setCounterState] = useState(0);
  function Plus(event) {
    setCounterState(counterState + 1);
  }
  function Minus(event) {
    setCounterState(counterState - 1);
  }
  return (
    <>
      <div className="cont">
        <button onClick={Minus}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <h1 className="count">{counterState}</h1>
        <button onClick={Plus}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <Tabs />
      <Like />
      <Random />
    </>
  );
}

export default App;
