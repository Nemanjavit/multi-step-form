import { useState } from "react";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import * as Switch from "@radix-ui/react-switch";
import PlanItem from "../plan-item";

interface SelectPlanProps {}

export type PlanT = {
  title: string;
  icon: string;
  monthly: string;
  yearly: string;
};

const SelectPlan: React.FC<SelectPlanProps> = ({}) => {
  const [planSelected, setPlanSelected] = useState<string>("");
  const isChecked = true;
  const plans = [
    { title: "Arcade", icon: arcade, monthly: "$9/mo", yearly: "90/yr" },
    { title: "Advanced", icon: advanced, monthly: "$9/mo", yearly: "90/yr" },
    { title: "Pro", icon: pro, monthly: "$9/mo", yearly: "90/yr" },
  ];

  const checkChange = (checked: boolean) => {
    console.log(checked);
  };

  const selectedPlan = (plan: string) => {
    console.log(plan);
    setPlanSelected(plan);
  };
  return (
    <div className="select-plan">
      <div className="plan-wrapper">
        {plans.map((plan, index) => {
          const isSelected = planSelected === plan.title;
          return (
            <PlanItem
              isSelected={isSelected}
              selectedPlan={selectedPlan}
              key={index}
              plan={plan}
            />
          );
        })}
      </div>

      <div className="switch-wrapper d-flex align-items-center justify-content-center">
        <label
          className={`label-monthly ${isChecked ? "checked" : ""}`}
          htmlFor="monthly"
        >
          Monthly
        </label>
        <Switch.Root className="SwitchRoot" onCheckedChange={checkChange}>
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
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
