// This is the `TopBar` component, which is made the following elements:
// 1. A logo
// 2. A navigation menu
// The navigation menu's onClick events are handled by a callback function provided by the `App` component.
// When a button is clicked, the callback function sends a string containing the unique ID of the clicked button to the `App` component.
// This ID is then passed to the `MainContainer` as a prop.
// In the `MainContainer`, a function assigns the corresponding display element based on the button ID.
// Using unique IDs for buttons ensures that the appropriate display element is re-rendered when a button is clicked.
//--------------------------------------------------------------------------------------------------------------------------------------

import { useState } from "react";

const TopBar = ({ sendBtnIdToMainContainer }) => {
  //
  // This state maintains a counter that is used to generate unique IDs for button names in the callback function.
  const [counter, setCounter] = useState(0);

  const handleButtonClick = (buttonName) => {
    // The counter is used to generate unique IDs for button names, ensuring that the corresponding display element is re-rendered when a button is clicked.
    sendBtnIdToMainContainer(buttonName + " " + counter);
    setCounter(counter + 1);
  };
  return (
    <>
      <header className="TopBar">
        <aside id="logo-section">
          <img
            src="./src/images/logo.png"
            alt="the logo"
            onClick={() => handleButtonClick("navHome")}
          />
        </aside>
        <aside className="NavSection">
          <nav id="navigation-bar">
            <ul>
              <li>
                <a href="#" onClick={() => handleButtonClick("navHome")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleButtonClick("navFeatures")}>
                  Features
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleButtonClick("navDatapolicy")}>
                  Data policy
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleButtonClick("navAbout")}>
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

export default TopBar;
