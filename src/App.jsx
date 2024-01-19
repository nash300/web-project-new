import React, { useContext } from "react";
import "./index.css";
import "./css/pageStyles.css";
import bgVideo from "./images/bgv.mp4";

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
    masterReset,
  } = useContext(MyContexts);

  return (
    <div id="pageWrapper" className="video-background">
      <video muted autoPlay loop>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="TopBar">
        <aside id="logo-section">
          <img
            src="./src/images/logo.png"
            alt="the logo"
            onClick={() => {
              masterReset();
            }}
          />
        </aside>
        <aside className="NavSection">
          <nav id="navigation-bar">
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    masterReset();
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
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
        <div id="button-section">
          <ButtonSection />
        </div>
        <div id="display-section">
          <DisplaySection />
        </div>
      </div>
    </div>
  );
};

export default App;
