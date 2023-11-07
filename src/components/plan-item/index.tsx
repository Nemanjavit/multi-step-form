import { useFormContext } from "react-hook-form";
import { PlanT } from "../select-plan/selectPlan";
import { convertPlanLenght } from "../../utils/helpers";

interface PlanItemProps {
  plan: PlanT;
  planLength: boolean;
}

const PlanItem: React.FC<PlanItemProps> = ({ plan, planLength }) => {
  const { title, icon, monthly, yearly } = plan;
  const { setValue, watch } = useFormContext();
  const watchPlanSelected = watch("planSelected");

  return (
    <button
      onClick={() => setValue("planSelected", plan)}
      className={`plan ${
        plan.title === watchPlanSelected.title ? "active" : ""
      }`}
    >
      <img className="plan-icon" src={icon} alt="plan-icon" />
      <div className="title-price-wrapper">
        <p className="plan-title">{title}</p>
        <p className="plan-price">
          {`${convertPlanLenght(planLength) === "monthly" ? monthly : yearly}/${
            convertPlanLenght(planLength) === "monthly" ? "mo" : "yr"
          }`}
        </p>
        {convertPlanLenght(planLength) === "yearly" && (
          <p className="plan-promotion">2 months free</p>
        )}
      </div>
    </button>
  );
};

export default PlanItem;
