import { addOnItems } from "../../utils/data";
import CheckBox from "../check-box";

interface AddOnsProps {}

export type AddonItemT = {
  label: string;
  text: string;
  price: {
    monthly: string;
    yearly: string;
  };
};

const AddOns: React.FC<AddOnsProps> = ({}) => {
  return (
    <div className="add-ons d-flex flex-column">
      {addOnItems.map((addon, index) => {
        return <CheckBox key={index} addOn={addon} />;
      })}
    </div>
  );
};

export default AddOns;
