import Input from "../Input";

interface YourInfoProps {}

const YourInfo: React.FC<YourInfoProps> = ({}) => {
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
        options={{ required: true, minLength: 6, maxLength: 12 }}
      />
    </div>
  );
};

export default YourInfo;
