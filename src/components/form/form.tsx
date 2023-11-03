import { useState } from "react";
import FormSlider from "../form-slider/form-slider";
import Stepper from "../stepper/stepper";

interface FormProps {}

const Form: React.FC<FormProps> = ({}) => {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="form d-flex">
      <Stepper step={step} />
      <FormSlider step={step} setStep={setStep} />
    </div>
  );
};

export default Form;
