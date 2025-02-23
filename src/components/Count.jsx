import { useState } from "react";

const Count = ({ selectedStepSize }) => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + Number(selectedStepSize))}
      className="bg-cyan-600 text-lg min-w-32 font-semibold text-white px-5 py-3 outline-none rounded-xl hover:bg-cyan-700 transition-all duration-300 cursor-pointer"
    >
      {count}
    </button>
  );
};

export default Count;
