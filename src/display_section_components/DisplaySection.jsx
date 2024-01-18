import React, { useContext } from "react";
import { MyContexts } from "../contexts/ContextFile";

const DisplaySection = () => {
  const { displayOutput } = useContext(MyContexts);

  return <div id="display-container">{displayOutput}</div>;
};

export default DisplaySection;
