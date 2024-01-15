import React, { useEffect, useState } from "react";
import "./index.css";
import HomeDisplay from "./display_components/HomeDisplay";
import DataPolicyDisplay from "./display_components/DataPolicyDisplay";
import AboutDisplay from "./display_components/AboutDisplay";
import FeaturesDisplay from "./display_components/FeaturesDisplay";
import ButtonSection from "./button_components/buttonSection";

const App = () => {
  //
  //
  // HOOKS
  //____________________________________________________________________
  const [userType, setUserType] = useState("");
  const [displaySection, setDisplaySection] = useState(<HomeDisplay />);

  //
  //
  //
  // FUNCTIONS
  //_______________________________________________________________________________

  // This function resets the navigation to the initial state
  const resetToHomePage = () => {
    setUserType("");
    setDisplaySection(<HomeDisplay />);
  };

  //----------------    NAVIGATION BAR   ---------------------
  // This function handles the page behaviour when the user
  // clicks on navigation bar buttons.
  //----------------------------------------------------------
  function handleNavBtns(elementID) {
    switch (elementID) {
      case "featuresBtn":
        setDisplaySection(<FeaturesDisplay />);

        break;
      case "dataPolicyBtn":
        setDisplaySection(<DataPolicyDisplay />);

        break;
      case "aboutBtn":
        setDisplaySection(<AboutDisplay />);

        break;
      default:
        resetToHomePage();
    }
  }
  //_____________________________________________________________________

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
                onClick={() => {
                  handleNavBtns("home");
                }}
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
        <ButtonSection
          setDisplaySection={setDisplaySection}
          userType={userType}
          setUserType={setUserType}
        />
        <div id="displaySection">{displaySection}</div>
      </div>
    </div>
  );
};

export default App;
