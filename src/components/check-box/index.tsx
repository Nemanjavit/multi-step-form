import { AddonItemT } from "../add-ons";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Checkbox from "@radix-ui/react-checkbox";
import { convertPlanLenght } from "../../utils/helpers";
import { useFormContext, Controller } from "react-hook-form";

interface CheckBoxProps {
  addOn: AddonItemT;
}

const CheckBox: React.FC<CheckBoxProps> = ({ addOn }) => {
  const { watch, control } = useFormContext();
  const { label, text, price } = addOn;

  const watchAddons = watch("addOns");
  const planSelected = watch("planLength", false);

  const labelToName = (label: string) => {
    return label.toLocaleLowerCase().replace(" ", "_");
  };

  const isSelected = (label: string) => {
    if (watchAddons && watchAddons[labelToName(label)]) {
      return "selected";
    }
    return "";
  };

  return (
    <div
      className={`d-flex checkbox-wrapper align-items-center ${isSelected(
        label
      )}`}
    >
      <Controller
        name={`addOns.${labelToName(label)}`}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Checkbox.Root
            value={value}
            name={labelToName(label)}
            className="CheckboxRoot"
            id={labelToName(label)}
            onCheckedChange={() => onChange(addOn)}
          >
            <Checkbox.Indicator className="CheckboxIndicator">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
        )}
      />

      <div className="d-flex flex-column label-wrapper">
        <label className="checkbox-label" htmlFor={label}>
          {label}
        </label>
        <span className="sub-label">{text}</span>
      </div>

      <div className="price-wrapper">
        <span className="price">{`+${
          convertPlanLenght(planSelected) === "monthly"
            ? price.monthly
            : price.yearly
        }/${
          convertPlanLenght(planSelected) === "monthly" ? "mo" : "yr"
        }`}</span>
      </div>
    </div>
  );
};

export default CheckBox;
