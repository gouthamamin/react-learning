import { useUser } from "../providers/useUser";

const Child = () => {
  const { name, setName } = useUser();

  return (
    <div className="bg-red-400 flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="font-bold">Inside Child name is {name }</h1>
      <button className="px-4 py-2 border-2 border-solid rounded-md bg-blue-500 text-white cursor-pointer"
        onClick={() => setName("Sahana Hegde")}>Set new Name</button>
    </div>
  );
};

const GrandChild =()=>{
  const {name} = useUser();
  return (
    <div className="bg-green-400 p-4">
      <h1 className="font-bold">Inside Child name is {name }</h1>
    </div>
  );
}

const Users = () => {
  return (
    <div className="flex flex-col gap-8">
      <Child />
      <GrandChild />
    </div>
  );
};

export default Users;