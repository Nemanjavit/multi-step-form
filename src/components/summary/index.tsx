import { Dispatch, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import { convertPlanLenght, filterAddons, getTotal } from "../../utils/helpers";

interface SummaryProps {
  setStep: Dispatch<SetStateAction<number>>;
}

const Summary: React.FC<SummaryProps> = ({ setStep }) => {
  const { getValues } = useFormContext();
  const data = getValues();
  const addOns = filterAddons(data.addOns);
  const total = getTotal(data, addOns);

  return (
    <div className="summary">
      <div className="summary-wrapper">
        {data.planSelected && (
          <div className="summary-plan">
            <div className="d-flex justify-content-between align-items-center plan">
              <div>
                <div className="d-flex">
                  <p className="plan-title">{`${data.planSelected.title}`}</p>
                  <p className="ms-1 plan-lenght">
                    ({convertPlanLenght(data.planLength)})
                  </p>
                </div>
                <button onClick={() => setStep(2)} className="change-button">
                  Change
                </button>
              </div>
              <span className="plan-price">
                $
                {convertPlanLenght(data.planLength) === "monthly"
                  ? data.planSelected.monthly
                  : data.planSelected.yearly}
                /{convertPlanLenght(data.planLength, true)}
              </span>
            </div>
          </div>
        )}
        <div className="summary-addon">
          {addOns.map((addOn, index) => {
            const { label, price } = data.addOns[addOn];

            return (
              <div
                key={index}
                className="d-flex justify-content-between summary-addOnItem"
              >
                <span className="title">{label}</span>
                <span className="price">
                  +$
                  {convertPlanLenght(data.planLength) === "monthly"
                    ? price.monthly
                    : price.yearly}
                  /{convertPlanLenght(data.planLength, true)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-between summary-total">
        <span>
          Total
          {convertPlanLenght(data.planLength) === "monthly"
            ? "(per month)"
            : "(per year)"}
        </span>
        <span className="total-price">
          ${total}/{convertPlanLenght(data.planLength, true)}
        </span>
      </div>
    </div>
  );
};

export default Summary;
