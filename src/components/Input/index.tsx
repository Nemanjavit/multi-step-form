import { RegisterOptions, useFormContext } from "react-hook-form";

interface InputProps {
  type: "text" | "number" | "email";
  label: string;
  name: "email" | "name" | "phone";
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  options?: RegisterOptions;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
  error,
  disabled,
  options,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`input-wrapper ${errors[name] ? "error" : ""}`}>
      <div className="d-flex justify-content-between label-row">
        <label className="input-label" htmlFor={label}>
          {label}
        </label>
        <span className="error-message">
          {errors[name]?.message?.toString()}
        </span>
      </div>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, options)}
      />
    </div>
  );
};

export default Input;
