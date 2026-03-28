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
    <div className="w-full flex flex-col items-center gap-4">
      <span className="text-lg font-bold"> Counter value : {count} </span>
      <div className="flex gap-4">
        <button className="px-4 py-2 border-2 border-solid rounded-md bg-green-400 text-white cursor-pointer"
          onClick={handleIncrement}>Increment</button>
        <button className="px-4 py-2 border-2 border-solid rounded-md bg-red-500 text-white cursor-pointer"
          onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;