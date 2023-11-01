import FormSlider from "../form-slider/form-slider";

interface FormProps {}

const Form: React.FC<FormProps> = ({}) => {
  return (
    <div className="form">
      <FormSlider
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
    </div>
  );
};

export default Form;
