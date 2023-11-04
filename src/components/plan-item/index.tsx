import { convertPlanLenght } from "../../utils/helpers";
import { PlanT } from "../select-plan/selectPlan";
import { useFormContext } from "react-hook-form";

interface PlanItemProps {
  plan: PlanT;
  planLength: boolean;
}

const PlanItem: React.FC<PlanItemProps> = ({ plan, planLength }) => {
  const { title, icon, monthly, yearly } = plan;
  const { setValue, getValues } = useFormContext();
  const selectedPlan = getValues("planSelected") ?? "";

  return (
    <button
      onClick={() => setValue("planSelected", plan)}
      className={`plan ${plan.title === selectedPlan.title ? "active" : ""}`}
    >
      <img className="plan-icon" src={icon} alt="plan-icon" />
      <span className="plan-title">{title}</span>
      <span className="plan-price">
        {`${convertPlanLenght(planLength) === "monthly" ? monthly : yearly}/${
          convertPlanLenght(planLength) === "monthly" ? "mo" : "yr"
        }`}
      </span>
    </button>
  );
};

export default PlanItem;
