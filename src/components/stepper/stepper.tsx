import React from "react";
import Step from "../step/step";
interface StepperProps {}

const Stepper: React.FC<StepperProps> = ({}) => {
  return (
    <div className="stepper">
      <div className="stepper-wrapper d-flex flex-column">
        <Step stepLabel="Step 1" stepTitle="Your Info" stepNum="1" />
        <Step stepLabel="Step 1" stepTitle="Your Info" stepNum="1" />
        <Step stepLabel="Step 1" stepTitle="Your Info" stepNum="1" />
        <Step stepLabel="Step 1" stepTitle="Your Info" stepNum="1" />
      </div>
    </div>
  );
};

export default Stepper;
