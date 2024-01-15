import { useEffect } from "react";
import { useButtonOutput } from "../button_components/buttonData";

const ButtonSection = () => {
  const { buttonOutput } = useButtonOutput();

  //
  // returning the button section to the website
  return <div id="buttonSection">{buttonOutput}</div>;
};

export default ButtonSection;
