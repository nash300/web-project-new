import { useEffect } from "react";
import ButtonFunctions from "./buttonFunctions";

const ButtonSection = () => {
  const { buttonOutput } = ButtonFunctions();

  useEffect(() => {
    console.log("In component updated");
  }, [buttonOutput]);
  //
  // returning the button section to the website
  return <div id="buttonSection">{buttonOutput}</div>;
};

export default ButtonSection;

//
//
//
//
//
//

//*
