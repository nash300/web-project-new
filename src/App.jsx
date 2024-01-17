import React, { useContext } from "react";
import "./index.css";
import "./css/pageStyles.css";

import ButtonSection from "./button_section_components/buttonSection";
import DisplaySection from "./display_section_components/DisplaySection";
import { MyContexts } from "./contexts/ContextFile";

const App = () => {
  const {
    setDisplayToHome,
    setDisplayToFeatures,
    setDisplayToAbout,
    setDisplayToDataPolicy,
    resetButtonOutput,
  } = useContext(MyContexts);

  return (
    <div id="pageWrapper">
      <div id="topBar">
        <aside id="logoSection">
          <img
            src="./src/images/logo.png"
            alt="the logo"
            className="home"
            onClick={() => {
              setDisplayToHome();
              resetButtonOutput();
            }}
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
                    setDisplayToHome();
                    resetButtonOutput();
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
                  onClick={() => {
                    setDisplayToFeatures();
                    resetButtonOutput();
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  id="dataPolicyBtn"
                  className="home"
                  onClick={() => {
                    setDisplayToDataPolicy();
                    resetButtonOutput();
                  }}
                >
                  Data policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  id="aboutBtn"
                  className="home"
                  onClick={() => {
                    setDisplayToAbout();
                    resetButtonOutput();
                  }}
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
        <div id="displaySection">
          <DisplaySection />
        </div>
      </div>
    </div>
  );
};

export default App;
