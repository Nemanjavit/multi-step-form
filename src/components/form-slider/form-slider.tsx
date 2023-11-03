import { Dispatch, SetStateAction, ReactNode } from "react";
import YourInfo from "../YourInfo/YourInfo";
import { stepList } from "../../utils/data";
import SelectPlan from "../select-plan/selectPlan";

interface FormSliderProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const FormSlider: React.FC<FormSliderProps> = ({ setStep, step }) => {
  const formComponent: Record<number, ReactNode> = {
    1: <YourInfo />,
    2: <SelectPlan />,
  };

  const headingText: Record<number, { title: string; subtitle: string }> = {
    1: {
      title: "Personal info",
      subtitle: "Please provide your name, email address, and phone number.",
    },
    2: {
      title: "Select your plan",
      subtitle: "You have the option of monthly or yearly billing.",
    },
    3: {
      title: "Pick add-ons",
      subtitle: "Add-ons help enhance your gaming experience.",
    },
    4: {
      title: "Finishing up",
      subtitle: "Double-check everything looks OK before confirming.",
    },
  };

  const maxStep = stepList.length;
  const component = formComponent[step];
  const { title, subtitle } = headingText[step];

  return (
    <div className="form-slider">
      <div className="slider-container d-flex flex-column">
        <div className="form-slider-header">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <div className="form-slider-body flex-grow-1">{component}</div>
        <div className="d-flex justify-content-between form-slider-footer">
          <button
            className={`slider-back ${step === 1 ? "hidden" : ""}`}
            onClick={() => setStep(step - 1)}
          >
            Go Back
          </button>
          <button onClick={() => setStep(step + 1)} className="slider-forward">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSlider;
