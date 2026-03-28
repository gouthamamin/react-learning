import { useState } from "react";
import Todos from "./components/Todos";

const App = () => {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div className="w-full min-h-screen flex flex-col gap-4 bg-sky-100">
      <h1 className="text-center font-bold text-2xl my-10">Welcome to React.js</h1>
      {showTodos && <Todos />}
      <button className="px-4 py-2 border-2 border-solid rounded-md bg-blue-500 text-white cursor-pointer"
        onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "Show Todos" : "Hide Todos"}
      </button>
    </div>
  );
};

export default App;