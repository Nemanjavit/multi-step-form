import { useState } from "react";
import Stepper from "../stepper/stepper";
import FormSlider from "../form-slider/form-slider";

interface FormProps {}

const Form: React.FC<FormProps> = ({}) => {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="form align-items-center d-flex flex-column flex-sm-row">
      <Stepper step={step} />
      <FormSlider step={step} setStep={setStep} />
    </div>
  );
};

export default Form;
