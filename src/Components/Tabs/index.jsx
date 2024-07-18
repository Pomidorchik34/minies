import React, { useState } from "react";
import "./index.css";
function Tabs() {
  function darkMode() {
    {
      document.querySelector("body").style.transition = "0.3s";
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector("body").style.color = "white";
    }
  }
  function WhiteMode() {
    {
      document.querySelector("body").style.transition = "0.3s";
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector("body").style.color = "black";
    }
  }
  function GoldMode() {
    {
      document.querySelector("body").style.transition = "0.3s";
      document.querySelector("body").style.backgroundColor = "gold";
      document.querySelector("body").style.color = "rgb(24, 49, 83)";
    }
  }
  return (
    <div className="cont animate-cont">
      <button onClick={darkMode} className="dark-mode mode-btn">
        Dark mode
      </button>
      <button onClick={WhiteMode} className="white-mode mode-btn">
        White mode
      </button>
      <button onClick={GoldMode} className="Yummy-mode mode-btn">
        Yellow mode
      </button>
    </div>
  );
}

export default Tabs;
