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
  const addOnItems = [
    {
      label: "Online Service",
      text: "Access multiplayer games",
      price: {
        monthly: "1",
        yearly: "10",
      },
    },
    {
      label: "Larger storage",
      text: "Extra 1TB of cloud save",
      price: {
        monthly: "2",
        yearly: "20",
      },
    },
    {
      label: "Customizable profile",
      text: "Custom theme on your profile",
      price: {
        monthly: "2",
        yearly: "20",
      },
    },
  ];

  return (
    <div className="add-ons d-flex flex-column">
      {addOnItems.map((addon, index) => {
        return <CheckBox key={index} addOn={addon} />;
      })}
    </div>
  );
};

export default AddOns;
