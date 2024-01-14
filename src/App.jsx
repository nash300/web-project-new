import React, { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import HomeDisplay from "./display_components/HomeDisplay";
import DataPolicyDisplay from "./display_components/DataPolicyDisplay";
import AboutDisplay from "./display_components/AboutDisplay";
import FeaturesDisplay from "./display_components/FeaturesDisplay";
import ButtonSection from "./button_components/buttonSection";
import ButtonFunctions from "./button_components/buttonFunctions";

const App = () => {
  //_________________________Hooks_______________________________________
  const [userType, setUserType] = useState("");
  const [displaySection, setDisplaySection] = useState(<HomeDisplay />);
  const { resetToHomeBtns } = ButtonFunctions();

  // This function resets the navigation to the initial state
  function resetToHomePage() {
    {
      resetToHomeBtns();
      setUserType("");
      setDisplaySection(<HomeDisplay />);
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
        <ButtonSection
          setDisplaySection={setDisplaySection}
          userType={userType}
          setUserType={setUserType}
        />
        <div id="displaySection">{displaySection}</div>
      </div>
    </div>
  );

  //
  //
  //_______________________________________________________________________________
  //_____________________________ FUNCTIONS _______________________________________
  //_______________________________________________________________________________
  //
  //
  //----------------    NAVIGATION BAR   ---------------------
  // This function handles the page behaviour when the user
  // clicks on navigation bar buttons.
  //----------------------------------------------------------
  function handleNavBtns(elementID) {
    switch (elementID) {
      case "featuresBtn":
        setDisplaySection(<FeaturesDisplay />);
        resetToHomeBtns();

        break;
      case "dataPolicyBtn":
        setDisplaySection(<DataPolicyDisplay />);
        resetToHomeBtns();

        break;
      case "aboutBtn":
        setDisplaySection(<AboutDisplay />);
        resetToHomeBtns();

        break;
      default:
        resetToHomePage();
    }
  }

  //
  //
};

export default App;
