import { useEffect, useState } from "react";

const Todos = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("todos"); // Runs on every render
  });

  useEffect(() => {
    console.log("Todos component mounted"); // Runs only once when component mounts

    //cleanup Function
    return ()=>{
      console.log("Todos component UNMOUNT");
    }
  }, []);

  useEffect(()=>{
    console.log("count value updated!!"); // Runs only when count changes
  },[count]);

  return (
    <div>
      <div className="w-full flex flex-col items-center gap-4">
        <span className="text-lg font-bold"> Counter value : {count} </span>
        <div className="flex gap-4">
          <button className="px-4 py-2 border-2 border-solid rounded-md bg-green-400 text-white cursor-pointer"
            onClick={() => { setCount(prev => prev + 1) }}>Increment</button>
          <button className="px-4 py-2 border-2 border-solid rounded-md bg-red-500 text-white cursor-pointer"
            onClick={() => { setCount(prev => prev - 1) }}>Decrement</button>
        </div>
      </div>

    </div>
  );
};

export default Todos;