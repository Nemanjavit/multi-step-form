import icon from "../../assets/images/icon-thank-you.svg";

interface ThankYouProps {}

const ThankYou: React.FC<ThankYouProps> = ({}) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center thank-you">
      <img className="icon" src={icon} />
      <h2 className="title">Thank you!</h2>
      <p className="text">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
