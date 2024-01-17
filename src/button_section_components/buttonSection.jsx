import React, { useContext } from "react";
import { MyContexts } from "../contexts/ContextFile";

const ButtonSection = () => {
  const { buttonOutput } = useContext(MyContexts);

  return <div id="buttonContainer">{buttonOutput}</div>;
};

export default ButtonSection;
