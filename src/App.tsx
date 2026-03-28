import Users from "./components/Users";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 bg-sky-100">
      <h1 className="text-center font-bold text-2xl my-10">Welcome to React.js</h1>
      <Users />
    </div>
  );
};

export default App;