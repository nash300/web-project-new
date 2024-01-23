import React, { useEffect, useContext } from "react";
import { CommonContext } from "../../context_files/commonContext";

const DisplaySection = ({ btnIdFromTopBar }) => {
  const {
    userType,
    setUserType,
    displayElement,
    setDisplayElement,
    visibleButtons,
    setVisibleButtons,
  } = useContext(CommonContext);

  return (
    <>
      {/* COMPONENTS SHOWN TO THE USER ARE MOUNTED HERE */}
      <span id="display-section">
        <span id="display-container">{displayElement}</span>
      </span>
    </>
  );
};

export default DisplaySection;
