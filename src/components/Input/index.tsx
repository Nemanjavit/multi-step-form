import { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number" | "email";
  label: string;
  value: string | number | undefined;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div className="input-wrapper">
      <div className="label-row">
        <label htmlFor={label}>{label}</label>
        <span>{error}</span>
      </div>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
