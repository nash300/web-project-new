import React from "react";
import Home from "./Home";
import { useState } from "react";

const DisplaySection = () => {
  const [displayOutput, setDisplayOutput] = useState(Home);

  return <div id="display-container">{displayOutput}</div>;
};
export default DisplaySection;
