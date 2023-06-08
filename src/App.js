import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleAddSupply = () => {
    if (counter < 5) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  const handleRemoveSupply = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container ">
      <h2>Counter: {counter}</h2>
      <button onClick={handleAddSupply} className="btn btn-dark">+</button>
      <button onClick={handleRemoveSupply} className="btn btn-dark">-</button>
    </div>
  );
}

export default App;