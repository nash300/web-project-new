// This is the section where it displays the buttons.

import React, { useContext } from "react";
import { CommonContext } from "../../context_files/commonContext";

const ButtonSection = () => {
  const { visibleButtons } = useContext(CommonContext);

  return (
    <span id="button-section">
      <span id="button-container">{visibleButtons}</span>
    </span>
  );
};

export default ButtonSection;
