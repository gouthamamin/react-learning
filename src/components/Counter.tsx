import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count === 0) return; // No negative counts
    // setCount(count - 1);
    setCount((prev) => prev - 1);
  }
  return (
    <div>
      <span> Counter value : {count} </span>
      <div className="flex gap-4">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;