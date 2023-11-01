import YourInfo from "../YourInfo/YourInfo";

interface FormSliderProps {
  title: string;
  subtitle: string;
}

const FormSlider: React.FC<FormSliderProps> = ({ title, subtitle }) => {
  return (
    <div className="form-slider d-flex flex-column">
      <div className="form-slider-header">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <div className="form-slider-body flex-grow-1">
        <YourInfo />
      </div>
      <div className="d-flex justify-content-between form-slider-footer">
        <button className="slider-back">Go Back</button>
        <button className="slider-forward">Next Step</button>
      </div>
    </div>
  );
};

export default FormSlider;
