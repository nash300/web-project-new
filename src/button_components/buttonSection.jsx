import { useButtonOutput } from "../button_components/buttonData";

const ButtonSection = () => {
  const { buttonOutput, resetButtonOutput } = useButtonOutput();

  // Invoking the function to render its result
  return <div id="buttonContainer">{buttonOutput}</div>;
};

export default ButtonSection;
