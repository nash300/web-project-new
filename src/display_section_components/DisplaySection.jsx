import React, { useContext } from "react";
import { MyContexts } from "./ContextFile";

const DisplaySection = () => {
  const { displayOutput } = useContext(MyContexts);

  return <div id="displayContainer">{displayOutput}</div>;
};

export default DisplaySection;
