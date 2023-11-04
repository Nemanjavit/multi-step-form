import { Dispatch, SetStateAction, ReactNode } from "react";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import YourInfo from "../YourInfo/YourInfo";
import { stepList } from "../../utils/data";
import SelectPlan from "../select-plan/selectPlan";
import AddOns, { AddonItemT } from "../add-ons";

interface FormSliderProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export interface FieldValues {
  name: string;
  email: string;
  phone: number;
  planSelected: string;
  planLength: boolean;
  addOns: AddonItemT | AddonItemT[];
}

const FormSlider: React.FC<FormSliderProps> = ({ setStep, step }) => {
  const methods = useForm<FieldValues>({
    defaultValues: {
      planSelected: "",
      planLength: false,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  const formComponent: Record<number, ReactNode> = {
    1: <YourInfo />,
    2: <SelectPlan />,
    3: <AddOns />,
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
    <FormProvider {...methods}>
      <form className="form-slider" onSubmit={methods.handleSubmit(onSubmit)}>
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
            <button type="submit" className="slider-forward">
              submit
            </button>
            <button
              onClick={() => setStep(step + 1)}
              className="slider-forward"
            >
              Next Step
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormSlider;
