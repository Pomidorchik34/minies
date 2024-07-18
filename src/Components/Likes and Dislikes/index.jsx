import React, { useState } from "react";
import "./index.css";
function LikesAndDisses() {
  const [counterState2, setCounterStateLike] = useState(0);
  function PlusLike(event) {
    setCounterStateLike(counterState2 + 0.5);
    if (counterState1 > 0) {
      setCounterStateDis(counterState1 - 0.5);
    }
  }
  const [counterState1, setCounterStateDis] = useState(0);
  function PlusDis() {
    setCounterStateDis(counterState1 + 0.5);
    if (counterState2 > 0) {
      setCounterStateLike(counterState2 - 0.5);
    }
  }
  return (
    <div className="cont contLike">
      <label onClick={PlusLike} className="btn-like">
        <input type="radio" name="likes" id="name" />
        <i className="fa-solid fa-heart"></i>
        <h6>{counterState2}</h6>
      </label>
      <label onClick={PlusDis} className="btn-dis">
        <input type="radio" name="likes" id="name" />
        <i className="fa-solid fa-heart-crack"></i>
        <h6>{counterState1}</h6>
      </label>
    </div>
  );
}
export default LikesAndDisses;
