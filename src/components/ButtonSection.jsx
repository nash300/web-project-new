import { useState } from "react";
import Button from "./Button";

const ButtonSection = () => {
  //
  const [button, setButton] = useState([
    <button id="lets-begin">Let's Begin</button>,
  ]);

  const btnProcessor = (button) => {
    const x = object;
    console.log(x);
  };

  //
  //
  //
  //------------------------------------
  return <span id="button-container">{button}</span>;
};

export default ButtonSection;
