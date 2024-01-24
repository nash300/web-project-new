// This is the `TopBar` component, which is made the following elements:
// 1. A logo
// 2. A navigation menu
// The navigation menu's onClick functions are stored in a contextProvider.
//-------------------------------------------------------------------------

import React, { useContext } from "react";
import { CommonContext } from "../../context_files/commonContext";

const TopBarSection = () => {
  // -Importing the onClick functions from the commonContext file
  const { resetToHome, featuresClick, dataPolicyClick, aboutClick } =
    useContext(CommonContext);
  //

  return (
    <>
      <header className="TopBar">
        <aside id="logo-section">
          <img
            src="./src/images/logo.png"
            alt="the logo"
            onClick={resetToHome}
          />
        </aside>
        <aside className="NavSection">
          <nav id="navigation-bar">
            <ul>
              <li>
                <a href="#" onClick={resetToHome}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={featuresClick}>
                  Features
                </a>
              </li>
              <li>
                <a href="#" onClick={dataPolicyClick}>
                  Data policy
                </a>
              </li>
              <li>
                <a href="#" onClick={aboutClick}>
                  About
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </header>
    </>
  );
};

export default TopBarSection;
