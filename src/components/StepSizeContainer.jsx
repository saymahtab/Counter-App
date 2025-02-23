import React from "react";

const StepSizeContainer = ({ steps, selectedStepSize, setSelectedStepSize }) => {

  const handleClick = (step) => {
    setSelectedStepSize(step);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-cyan-800 font-bold text-lg font-sans">Step Size</p>
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => handleClick(step)}
            className={`${
              selectedStepSize === step ? "bg-cyan-700" : "bg-cyan-600"
            } text-lg text-white px-7 py-1 outline-none rounded-lg active:scale-95 hover:bg-cyan-700 transition-all duration-200 cursor-pointer`}
          >
            {step}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepSizeContainer;
