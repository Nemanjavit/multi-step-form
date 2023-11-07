import { FieldValues } from "react-hook-form";

interface AddOn {
  [key: string]: boolean;
}

export const convertPlanLenght = (checked: boolean, shortend?: boolean) => {
  if (checked) {
    return shortend ? "yr" : "yearly";
  }
  return shortend ? "mo" : "monthly";
};

export const filterAddons = (addons: AddOn) => {
  const items = Object.keys(addons);
  const validValues = items.filter((item) => addons[item] !== undefined);

  return validValues;
};

export const getTotal = (data: FieldValues, addOns: string[]) => {
  const planLength = convertPlanLenght(data.planLength);

  const planPrice = parseInt(
    planLength === "monthly"
      ? data.planSelected.monthly
      : data.planSelected.yearly
  );

  const addOnTotal = addOns.reduce((accum, item) => {
    const price = data.addOns[item].price;

    return (
      accum + parseInt(planLength === "monthly" ? price.monthly : price.yearly)
    );
  }, 0);

  return addOnTotal + planPrice;
};
