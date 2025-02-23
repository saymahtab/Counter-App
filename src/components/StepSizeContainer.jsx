import React from "react";
import { TiDelete } from "react-icons/ti";

const StepSizeContainer = ({
  steps,
  selectedStepSize,
  setSelectedStepSize,
  handleDelete,
}) => {

  const handleClick = (step) => {
    setSelectedStepSize(step);
  };


  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-cyan-800 font-bold text-lg font-sans">Step Size</p>
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {steps.map((step, index) => (
          <div className="relative">
            <button 
              className="absolute right-[-4px] top-[-4px] cursor-pointer"
              onClick={() => handleDelete(step)}
            >
              <TiDelete size={20} className="text-white" />
            </button>
            <button
              key={index}
              onClick={() => handleClick(step)}
              className={`${
                selectedStepSize === step ? "bg-cyan-700" : "bg-cyan-600"
              } text-lg text-white px-7 py-1 outline-none rounded-md active:scale-95 hover:bg-cyan-700 transition-all duration-200 cursor-pointer`}
            >
              {step}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSizeContainer;
