"use client";

import { useState } from "react";

interface HandleCountProps {
  type: "add" | "sub";
}

function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = ({ type }: HandleCountProps) => {
    switch (type) {
      case "add":
        setCount((prevCount) => prevCount + 1);
        return;
      case "sub":
        setCount((prevCount) => prevCount - 1);
        return;
      default:
        throw new Error(`Handled type: ${type}`);
    }
  };

  return (
    <div className="flex flex-col items-center w-full mt-4 mx-auto">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div>
        <button
          className="bg-cyan-950 text-gray-300 px-4 py-2 mt-4 mx-2"
          onClick={() => handleCount({ type: "sub" })}
        >
          -
        </button>
        <button
          className="bg-cyan-950 text-gray-300 px-4 py-2 mt-4 mx-2"
          onClick={() => handleCount({ type: "add" })}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
