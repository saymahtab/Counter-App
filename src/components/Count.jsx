import { useState } from "react";

const Count = ({ selectedStepSize }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full flex flex-col gap-4">
      <div
        className="bg-cyan-600 text-center text-lg min-w-32 font-semibold text-white px-5 py-3 outline-none rounded-md hover:bg-cyan-700 transition-all duration-300 cursor-pointer"
      >
        {count}
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setCount(count + Number(selectedStepSize))}
          className="bg-cyan-600 text-3xl min-w-32 font-semibold text-white px-4 py-2 outline-none rounded-md transition-all duration-300 cursor-pointer w-1/2 active:scale-[97%]">
          +
        </button>
        <button 
          onClick={() => setCount(count - Number(selectedStepSize))}
          className="bg-white text-3xl min-w-32 font-semibold text-black px-4 py-2 outline-none rounded-md transition-all duration-300 cursor-pointer w-1/2 active:scale-[97%]">
          -
        </button>
      </div>
    </div>
  );
};

export default Count;
