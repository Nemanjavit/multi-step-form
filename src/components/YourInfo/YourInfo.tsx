import { useState } from "react";
import Input from "../Input";
import { UseFormRegister } from "react-hook-form/dist/types";
import { FieldValues } from "../form-slider/form-slider";
import { useFormContext } from "react-hook-form";

interface YourInfoProps {}

const YourInfo: React.FC<YourInfoProps> = ({}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number | undefined>(undefined);

  return (
    <div className="d-flex flex-column your-info">
      <Input
        type="text"
        placeholder="e.g. Stephen King"
        label="Name"
        name="name"
      />
      <Input
        label="Email Address"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        name="email"
      />
      <Input
        type="number"
        placeholder="e.g. +1 234 567 890"
        label="Phone Number"
        name="phone"
      />
    </div>
  );
};

export default YourInfo;
