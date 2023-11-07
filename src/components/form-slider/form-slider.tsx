import { Dispatch, SetStateAction, ReactNode } from "react";

import * as yup from "yup";
import Summary from "../summary";
import ThankYou from "../ThankYou.tsx";
import YourInfo from "../YourInfo/YourInfo";
import AddOns, { AddonItemT } from "../add-ons";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectPlan, { PlanT } from "../select-plan/selectPlan";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { headingText, phoneRegExp, plans, stepList } from "../../utils/data";

interface FormSliderProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export interface FieldValues {
  name: string;
  email: string;
  phone: number;
  planSelected: PlanT;
  planLength: boolean;
  addOns: AddonItemT | AddonItemT[];
}

const schema = yup.object({
  name: yup.string().required().min(5).max(20),
  email: yup.string().email(),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  planSelected: yup.object(),
  planLength: yup.boolean(),
});

export type FormData = yup.InferType<typeof schema>;

const FormSlider: React.FC<FormSliderProps> = ({ setStep, step }) => {
  const methods = useForm<FormData>({
    defaultValues: {
      planSelected: plans[0],
      planLength: false,
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => setStep(5);

  const formComponent: Record<number, ReactNode> = {
    1: <YourInfo />,
    2: <SelectPlan />,
    3: <AddOns />,
    4: <Summary setStep={setStep} />,
    5: <ThankYou />,
  };

  const component = formComponent[step];
  const { title, subtitle } = headingText[step] ?? "";
  const {
    formState: { errors },
    trigger,
  } = methods;

  return (
    <FormProvider {...methods}>
      <form
        className="form-slider"
        onSubmit={() => methods.handleSubmit(onSubmit)}
      >
        <div className="slider-container d-flex flex-column">
          {step < 5 && (
            <div className="form-slider-header">
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
            </div>
          )}

          <div className="form-slider-body flex-grow-1">{component}</div>
          {step < 5 && (
            <div className="d-flex justify-content-between form-slider-footer">
              <button
                className={`slider-back ${step === 1 ? "hidden" : ""}`}
                onClick={() => setStep((prevStep) => prevStep - 1)}
              >
                Go Back
              </button>

              {step <= 4 ? (
                <button
                  type="button"
                  disabled={Object.keys(errors).length > 0}
                  onClick={async () => {
                    const validate = await trigger(["name", "email", "phone"]);
                    if (validate) {
                      setStep((prevStep) => prevStep + 1);
                    }
                  }}
                  className="slider-forward"
                >
                  Next Step
                </button>
              ) : (
                <button type="submit" className="slider-forward">
                  Confirm
                </button>
              )}
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default FormSlider;
