import { useState } from "react";
import Header from "./components/Header";
import StepSizeContainer from "./components/StepSizeContainer";
import CustomSize from "./components/CustomSize";
import Count from "./components/Count";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [steps, setSteps] = useState([2, 3, 4, 5, 6, 7, 8]);
  const [selectedStepSize, setSelectedStepSize] = useState(1);

  const addStepSize = (stepSize) => {
    setSteps([...steps, stepSize]);
  };

  return (
    <div className="min-h-screen items-center flex justify-center ">
      <div className="flex items-center justify-center flex-col gap-12 bg-gray-100 w-xl p-2 sm:p-5 rounded-2xl mx-5">
        <Header />
        <Count selectedStepSize={selectedStepSize} />
        <StepSizeContainer
          steps={steps}
          selectedStepSize={selectedStepSize}
          setSelectedStepSize={setSelectedStepSize}
        />
        <CustomSize addStepSize={addStepSize} />
      </div>
      <Toaster />
    </div>
  );
};

export default App;
