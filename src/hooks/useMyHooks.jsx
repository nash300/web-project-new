import { useState, useEffect } from "react";
import HomeDisplay from "../display_components/HomeDisplay";
import FeaturesDisplay from "../display_components/FeaturesDisplay";
import DataPolicyDisplay from "../display_components/DataPolicyDisplay";
import AboutDisplay from "../display_components/AboutDisplay";
import LetsBeginButtons from "../button_components/LetsBeginButtons";

export const useHandleActions = () => {
  const [userType, setUserType] = useState("");
  const [displaySection, setDisplaySection] = useState(<HomeDisplay />);
  const [buttonSection, setButtonSection] = useState(<LetsBeginButtons />);
  //
  //
  //
  //
  //*****************************************************************
  //                   NAVIGATION SECTION FUNCTIONS
  //*****************************************************************
  //
  /*Special function to brings the whole navigation into the Home status*/
  const setToHomePage = () => {
    setUserType("");
    setHomeButtons(); //inserts "Lets begin" button
    setDisplaySection(<HomeDisplay />);
  };

  /* Dedicated function which handles navigation menu button clicks*/
  const handleNavBtns = (elementID) => {
    switch (elementID) {
      case "featuresBtn":
        setDisplaySection(<FeaturesDisplay />);
        setHomeButtons();

        break;
      case "dataPolicyBtn":
        setDisplaySection(<DataPolicyDisplay />);
        setHomeButtons();

        break;
      case "aboutBtn":
        setDisplaySection(<AboutDisplay />);
        setHomeButtons();

        break;
      default:
        setToHomePage();
    }
  };
  //
  //
  //
  //*****************************************************************
  //                   BUTTON SECTION FUNCTIONS
  //*****************************************************************
  //
  /*function for updating the button section*/
  const updateButtonSection = (buttonElements) => {
    setButtonSection(buttonElements);
  };

  /*This function brings the buttons section to it's home-page state*/
  const setHomeButtons = () => {
    setButtonSection(
      <>
        <LetsBeginButtons />
      </>
    );
  };
  //
  //
  //
  //
  //
  //*****************************************************************
  //                   DISPLAY SECTION FUNCTIONS
  //*****************************************************************
  //

  /*This function triggers onclick events for the buttons in the "Button section"*/
  const buttonHandler = (buttonID) => {
    switch (buttonID) {
      case "letsBegin":
        pageHandler(
          <>
            <button>I want to register</button>
            <button>Search for a teacher</button>
          </>,
          <AboutDisplay />
        );

        break;
      case "IwantToLearn":
        setUserType("student");
        pageHandler(
          <>
            <button>I want to register</button>
            <button>Search for a teacher</button>
          </>,
          <HomeDisplay />
        );
        break;
      case "IwantToTeach":
        setUserType("teacher");
        console.log("usertype = teacher");
        break;

      default:
        break;
    }
  };

  //*****************************************************************
  //                   BUTTON + DISPLAY SECTION FUNCTIONS
  //*****************************************************************
  //
  /* Changes the display sections inserting the incomming parameters*/
  /* It can be used to customize pages combining both sections ("button section" & "display section")*/
  const pageHandler = (buttons, displayElement) => {
    setButtonSection(buttons);
    setDisplaySection(displayElement);
  };
  //
  //
  //
  //
  //********************************** */
  return {
    setToHomePage,
    displaySection,
    buttonSection,
    handleNavBtns,
    pageHandler,
    setHomeButtons,
    buttonHandler,
    updateButtonSection,
  };
};
