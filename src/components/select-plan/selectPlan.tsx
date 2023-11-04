import { useState } from "react";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import * as Switch from "@radix-ui/react-switch";
import PlanItem from "../plan-item";
import { useFormContext, Controller } from "react-hook-form";

interface SelectPlanProps {}

export type PlanT = {
  title: string;
  icon: string;
  monthly: string;
  yearly: string;
};

const SelectPlan: React.FC<SelectPlanProps> = ({}) => {
  const { setValue, watch, getValues } = useFormContext();
  const planLength = watch("planLength", false);

  const isChecked = true;

  const plans = [
    { title: "Arcade", icon: arcade, monthly: "9", yearly: "90" },
    { title: "Advanced", icon: advanced, monthly: "12", yearly: "120" },
    { title: "Pro", icon: pro, monthly: "15", yearly: "150" },
  ];

  return (
    <div className="select-plan">
      <div className="plan-wrapper">
        {plans.map((plan, index) => {
          return <PlanItem planLength={planLength} key={index} plan={plan} />;
        })}
      </div>

      <div className="switch-wrapper d-flex align-items-center justify-content-center">
        <label
          className={`label-monthly ${isChecked ? "checked" : ""}`}
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
          className={`label-monthly ${isChecked ? "checked" : ""}`}
          htmlFor="yearly"
        >
          Yearly
        </label>
      </div>
    </div>
  );
};

export default SelectPlan;
