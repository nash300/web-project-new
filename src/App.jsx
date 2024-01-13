import React, { useEffect } from "react";
import "./index.css";
import { useHandleActions } from "./hooks/useMyHooks";

const App = () => {
  const { setToHomePage, displaySection, buttonSection, handleNavBtns } =
    useHandleActions();

  useEffect(() => {
    setToHomePage();
  }, []);

  return (
    <div id="pageWrapper">
      <div id="topBar">
        <img
          src="./src/images/logo.png"
          alt="the logo"
          id="logo"
          className="home"
          onClick={() => handleNavBtns("home")}
        />
        <nav id="navBar" className="navBarClass">
          <ul>
            <li>
              <a
                href="#"
                id="homeBtn"
                className="home"
                onClick={() => handleNavBtns("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                id="featuresBtn"
                onClick={() => handleNavBtns("featuresBtn")}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                id="dataPolicyBtn"
                onClick={() => handleNavBtns("dataPolicyBtn")}
              >
                Data policy
              </a>
            </li>
            <li>
              <a
                href="#"
                id="aboutBtn"
                onClick={() => handleNavBtns("aboutBtn")}
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="main-container">
        <span id="buttonSection">{buttonSection}</span>
        <span id="displaySection">{displaySection}</span>
      </div>
    </div>
  );
};

export default App;
