import React, { useState } from "react";
import "./index.css";

function Progres() {
  const [width, setWidth] = useState(0);
  function Plus() {
    if (width < 1000) {
      setWidth(width + 10);

      document.querySelector(".progress").style.width = `${width + 55}px`;
    }
  }
  function Minus() {
    if (width > 0) {
      setWidth(width - 10);
      document.querySelector(".progress").style.width = `${width + 40}px`;
    }
  }
  return (
    <div className="cont-b">
      <h1 className="count">{`${width / 10}%`}</h1>
      <div className="cont cont-bar">
        <button onClick={Minus} className="minus">
          -
        </button>
        <div className="bar"></div>
        <div className="progress"></div>
        <button onClick={Plus} className="plus">
          +
        </button>
      </div>
    </div>
  );
}

export default Progres;
