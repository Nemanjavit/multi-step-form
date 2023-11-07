import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

export const stepList = [
  {
    stepLabel: "Step 1",
    stepTitle: "Your info",
    stepNum: "1",
  },
  {
    stepLabel: "Step 2",
    stepTitle: "Select plan",
    stepNum: "2",
  },
  {
    stepLabel: "Step 3",
    stepTitle: "Add-ons",
    stepNum: "3",
  },
  {
    stepLabel: "Step 4",
    stepTitle: "Summary",
    stepNum: "4",
  },
];

export const plans = [
  { title: "Arcade", icon: arcade, monthly: "9", yearly: "90" },
  { title: "Advanced", icon: advanced, monthly: "12", yearly: "120" },
  { title: "Pro", icon: pro, monthly: "15", yearly: "150" },
];

export const headingText: Record<number, { title: string; subtitle: string }> =
  {
    1: {
      title: "Personal info",
      subtitle: "Please provide your name, email address, and phone number.",
    },
    2: {
      title: "Select your plan",
      subtitle: "You have the option of monthly or yearly billing.",
    },
    3: {
      title: "Pick add-ons",
      subtitle: "Add-ons help enhance your gaming experience.",
    },
    4: {
      title: "Finishing up",
      subtitle: "Double-check everything looks OK before confirming.",
    },
  };

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const steps = [
  {
    stepLabel: "Step 1",
    stepTitle: "Your info",
    stepNum: "1",
  },
  {
    stepLabel: "Step 2",
    stepTitle: "Select plan",
    stepNum: "2",
  },
  {
    stepLabel: "Step 3",
    stepTitle: "Add-ons",
    stepNum: "3",
  },
  {
    stepLabel: "Step 4",
    stepTitle: "Summary",
    stepNum: "4",
  },
];

export const addOnItems = [
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
