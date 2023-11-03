import Step from "../step/step";

interface StepperProps {
  step: number;
}

const Stepper: React.FC<StepperProps> = ({ step }) => {
  const steps = [
    {
      stepLabel: "Step 1",
      stepTitle: "Your info",
      stepNum: "1",
    },
    {
      stepLabel: "Step 2",
      stepTitle: "Select plan",
      stepNum: "2",
    },
    {
      stepLabel: "Step 3",
      stepTitle: "Add-ons",
      stepNum: "3",
    },
    {
      stepLabel: "Step 4",
      stepTitle: "Summary",
      stepNum: "4",
    },
  ];

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
              isActive={step === index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
