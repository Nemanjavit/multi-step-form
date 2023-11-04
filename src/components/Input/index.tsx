import { useFormContext } from "react-hook-form";

interface InputProps {
  type: "text" | "number" | "email";
  label: string;
  name: "email" | "name" | "phone";
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
  error,
  disabled,
}) => {
  const { register } = useFormContext();

  return (
    <div className="input-wrapper">
      <div className="label-row">
        <label htmlFor={label}>{label}</label>
        <span>{error}</span>
      </div>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
      />
    </div>
  );
};

export default Input;
