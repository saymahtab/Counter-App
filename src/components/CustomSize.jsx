import { useState } from "react";
import toast from "react-hot-toast";

const CustomSize = ({ addStepSize }) => {

  const [stepSize, setStepSize] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(stepSize.trim()) {
      addStepSize(stepSize)
      toast.success('Step added')
    }
    setStepSize('')
  }

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <p className="text-cyan-800 font-bold text-lg font-sans">Custom Size</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2 flex-wrap justify-center w-full"
      >
        <input
          type="text"
          className="bg-white rounded-md py-2 px-2 w-full outline-none text-md text-center text-gray-500"
          value={stepSize}
          onChange={(e) => setStepSize(e.target.value)}
          placeholder="Add Custom Step Size"
        />
        <button
          type="submit"
          className="bg-cyan-600 text-sm w-full text-white px-6 active:scale-[98%] py-3 outline-none rounded-lg hover:bg-cyan-700 transition-all duration-200 cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CustomSize;
