import { PlanT } from "../select-plan/selectPlan";

interface PlanItemProps {
  plan: PlanT;
  isSelected: boolean;
  selectedPlan: (plan: string) => void;
}

const PlanItem: React.FC<PlanItemProps> = ({
  plan,
  isSelected,
  selectedPlan,
}) => {
  const { title, icon, monthly, yearly } = plan;

  return (
    <button
      onClick={() => selectedPlan(title)}
      className={`plan ${isSelected ? "active" : ""}`}
    >
      <img className="plan-icon" src={icon} alt="plan-icon" />
      <span className="plan-title">{title}</span>
      <span className="plan-price">{monthly}</span>
    </button>
  );
};

export default PlanItem;
