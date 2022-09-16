import React, { useState } from "react";
import "./App.css";

function App() {
  const [Counter, setCounter] = useState(0);

  const count = () => {
    setCounter(Counter + 1);
  };

  const decrementNo = () => {
    setCounter(Counter - 1);
    if (Counter === 0) {
      return setCounter(Counter);
    }
  };

  const feedBack = Counter > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div className="App">
      <h2>Counter App</h2>
      <div>{Counter}</div>
      <p>{feedBack}</p>
      <button onClick={count}>Add 1</button>
      <button onClick={decrementNo}> decrease 1</button>
    </div>
  );
}

export default App;
