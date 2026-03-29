import { useRef } from "react"

const Input = () => {
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  const handleInputOne = () => {
    if (input1Ref.current)
      input1Ref.current.value = "10";
  };

  const handleInputTwo = () => {
    if (input2Ref.current)
      input2Ref.current.value = "20";
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center gap-4">
        <input className="border-2 border-solid rounded-md w-1/2"
          ref={input1Ref} type="number" />
        <input className="border-2 border-solid rounded-md w-1/2"
          ref={input2Ref} type="text" />
      </div>

      <div className="flex gap-4 justify-center">
        <button className="px-4 py-2 border-2 border-solid rounded-md bg-blue-500 text-white cursor-pointer"
          onClick={handleInputOne} >Input 1</button>
        <button className="px-4 py-2 border-2 border-solid rounded-md bg-blue-500 text-white cursor-pointer"
          onClick={handleInputTwo} >Input 2</button>
      </div>
    </div>
  )
};

export default Input;



