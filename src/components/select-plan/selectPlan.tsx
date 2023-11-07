import PlanItem from "../plan-item";
import { plans } from "../../utils/data";
import * as Switch from "@radix-ui/react-switch";
import { useFormContext, Controller } from "react-hook-form";

interface SelectPlanProps {}

export type PlanT = {
  title: string;
  icon: string;
  monthly: string;
  yearly: string;
};

const SelectPlan: React.FC<SelectPlanProps> = ({}) => {
  const { watch } = useFormContext();
  const planLength = watch("planLength", false);

  return (
    <div className="select-plan">
      <div className="plan-wrapper d-flex flex-column flex-sm-row">
        {plans.map((plan, index) => {
          return <PlanItem planLength={planLength} key={index} plan={plan} />;
        })}
      </div>

      <div className="switch-wrapper d-flex align-items-center justify-content-center">
        <label
          className={`label-monthly ${!planLength ? "checked" : ""}`}
          htmlFor="monthly"
        >
          Monthly
        </label>
        <Controller
          name="planLength"
          render={({ field: { value, onChange } }) => {
            return (
              <Switch.Root
                checked={value}
                className="SwitchRoot"
                onCheckedChange={onChange}
              >
                <Switch.Thumb className="SwitchThumb" />
              </Switch.Root>
            );
          }}
        />

        <label
          className={`label-monthly ${planLength ? "checked" : ""}`}
          htmlFor="yearly"
        >
          Yearly
        </label>
      </div>
    </div>
  );
};

export default SelectPlan;
