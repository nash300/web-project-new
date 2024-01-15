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
  const [userType, setUserType] = useState(null);
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
        <aside id="logoSection">
          <img
            src="./src/images/logo.png"
            alt="the logo"
            className="home"
            onClick={() => handleNavBtns("home")}
          />
        </aside>
        <aside id="navSection">
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
                  className="home"
                  onClick={() => handleNavBtns("featuresBtn")}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  id="dataPolicyBtn"
                  className="home"
                  onClick={() => handleNavBtns("dataPolicyBtn")}
                >
                  Data policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  id="aboutBtn"
                  className="home"
                  onClick={() => handleNavBtns("aboutBtn")}
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
      <div id="main-container">
        <div id="buttonSection">
          <ButtonSection />
        </div>
        <div id="displaySection">{displaySection}</div>
      </div>
    </div>
  );
};

export default App;
