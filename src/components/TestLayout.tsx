import { useEffect, useLayoutEffect, useRef, useState } from "react";

const TestLayout = () => {
  const [width, setWidth] = useState<number>(0);
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    console.log("useLayoutEffect runs!")
    const rect = boxRef.current?.getBoundingClientRect();
    setWidth(rect?.width || 0);
  });

  useEffect(() => {
    console.log("useEffect runs!")
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div ref={boxRef} className="w-[100px] h-[100px] bg-red-500">
      </div>
      <span>Width of box :{width}</span>
    </div>
  );
};

export default TestLayout;
