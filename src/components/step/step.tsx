interface StepProps {
  stepNum: string;
  stepLabel: string;
  stepTitle: string;
  isActive: boolean;
}

const Step: React.FC<StepProps> = ({
  stepLabel,
  stepNum,
  stepTitle,
  isActive,
}) => {
  return (
    <div
      className={`py-2 d-flex align-items-center step ${
        isActive ? "active" : ""
      }`}
    >
      <div className="step-circle d-flex align-items-center justify-content-center me-3">
        <div className="step-number">{stepNum}</div>
      </div>
      <div className="d-flex flex-column">
        <span className="step-label">{stepLabel}</span>
        <span className="step-title">{stepTitle}</span>
      </div>
    </div>
  );
};

export default Step;
