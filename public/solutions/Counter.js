import React, { useState } from "react";
import "./Counter.scss";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }
  function decrementCounter() {
    setCounter(counter - 1);
  }
  function resetCounter() {
    setCounter(0);
  }

  return (
    <div>
      <div className="counter">{counter}</div>
      <div className="action-buttons">
        <div>
          <button onClick={decrementCounter}>-</button>
        </div>
        <div>
          <button onClick={incrementCounter}>+</button>
        </div>
      </div>
      <div className="reset-button">
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}
