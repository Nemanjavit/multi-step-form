import { useState } from "react";
import Input from "../Input";

interface YourInfoProps {}

const YourInfo: React.FC<YourInfoProps> = ({}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number | undefined>(undefined);
  const changeHangler = () => {};

  return (
    <div className="d-flex flex-column your-info">
      <Input
        type="text"
        placeholder="e.g. Stephen King"
        label="Name"
        name="name"
        value={name}
        onChange={changeHangler}
      />
      <Input
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        label="Email Address"
        name="email"
        value={email}
        onChange={changeHangler}
      />
      <Input
        type="number"
        placeholder="e.g. +1 234 567 890"
        label="Phone Number"
        name="phone"
        value={phone}
        onChange={changeHangler}
      />
    </div>
  );
};

export default YourInfo;
