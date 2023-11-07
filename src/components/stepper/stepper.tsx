import { steps } from "../../utils/data";
import Step from "../step/step";

interface StepperProps {
  step: number;
}

const Stepper: React.FC<StepperProps> = ({ step }) => {
  const keepLastStepActive = (
    step: number,
    steps: { stepLabel: string; stepTitle: string; stepNum: string }[],
    index: number
  ) => {
    if (step < steps.length) {
      return step === index + 1;
    }
    return index === steps.length - 1;
  };

  return (
    <div className="stepper">
      <div className="stepper-wrapper d-flex flex-column">
        {steps.map((stepItem, index) => {
          const { stepLabel, stepNum, stepTitle } = stepItem;

          return (
            <Step
              key={index}
              stepNum={stepNum}
              stepLabel={stepLabel}
              stepTitle={stepTitle}
              isActive={keepLastStepActive(step, steps, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
