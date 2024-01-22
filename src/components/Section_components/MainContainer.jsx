// This file defines the MainContainer component, the central component of the application.
// The MainContainer consists of two sections:
//   1. Button section: Handles user interactions and button clicks.
//   2. Display section: Renders output components, such as pages and forms.
// Due to the tight integration between these sections, all definitions for buttons, button click handlers, and display handling functions are centralized within this component.
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import { useState } from "react";
import Search from "../Search";
import Registration from "./../Registration";
import Profile from "./../Profile";
import SearchResults from "./../SearchResults";
import HomeDisplay from "../Home";
import Features from "../Features";
import { useEffect } from "react";
import DataPolicy from "./../DataPolicy";
import About from "./../About";

const MainContainer = ({ messageFromTopBar }) => {
  console.log(messageFromTopBar);
  //
  //______________________________________________________________________________________
  // STATE FOR HOLDING CURRENT DISPLAY COMPONENT
  // This section defines the state object for managing the currently displayed component.
  // The "displayElement" object is directly rendered by the "Display section" component.
  //______________________________________________________________________________________
  const [displayElement, setDisplayElement] = useState(HomeDisplay);

  //___________________________________________________________________________________________________________________
  // STATE FOR HOLDING VISIBLE BUTTONS
  // This section defines the state object for managing the visible buttons.
  // The "visibleButtons" object is directly rendered by the "Button section" component.
  // To avoid circular dependencies, the initial state button and its corresponding onClick functions are defined here.
  // The remaining definitions are located below.
  //___________________________________________________________________________________________________________________
  const letsBeginClick = () => {
    setVisibleButtons([iWantToLearnBtn, iWantToTeachBtn]);
    setDisplayElement(HomeDisplay);
  };
  const letsBeginBtn = (
    <button key={"letsBeginBtn"} onClick={letsBeginClick}>
      Lets Begin!
    </button>
  );
  const [visibleButtons, setVisibleButtons] = useState(letsBeginBtn);
  //
  //_____________________________________________________________
  //  BUTTON ON-CLICK FUNCTIONS
  // This section defines the callback functions triggered when buttons are clicked.

  const iWantToTeachClick = () => {
    setVisibleButtons([iWantToRegisterBtn, searchForAstudentBtn]);
  };

  const iWantToLearnClick = () => {
    setVisibleButtons([iWantToRegisterBtn, searchForAteacherBtn]);
  };

  const iWantToRegisterClick = () => {
    setDisplayElement(Registration);
    setVisibleButtons([registerBtn]);
  };

  const searchForAstudentClick = () => {
    setDisplayElement(Search);
    setVisibleButtons([searchBtn]);
  };

  const searchForAteacherClick = () => {
    setDisplayElement(Search);
    setVisibleButtons([searchBtn]);
  };

  const registerClick = () => {
    setDisplayElement(Profile);
    setVisibleButtons([searchForAstudentBtn, searchForAteacherBtn]);
  };

  const searchClick = () => {
    setDisplayElement(SearchResults);
    setVisibleButtons([newSearchBtn]);
  };

  const newSearchClick = () => {
    setDisplayElement(Search);
    setVisibleButtons(searchBtn);
  };

  //_________________________________________________________________________
  // DEFINICTIONS OF BUTTONS
  // This section outlines the definitions of the buttons used in the application.

  const iWantToLearnBtn = (
    <button key={"iWantToLearnBtn"} onClick={iWantToLearnClick}>
      I want to learn
    </button>
  );
  const iWantToTeachBtn = (
    <button key={"iWantToTeachBtn"} onClick={iWantToTeachClick}>
      I want to teach
    </button>
  );
  const iWantToRegisterBtn = (
    <button key={"iWantToRegisterBtn"} onClick={iWantToRegisterClick}>
      I want to register
    </button>
  );
  const searchForAstudentBtn = (
    <button key={"searchForAstudentBtn"} onClick={searchForAstudentClick}>
      Search for a student
    </button>
  );
  const searchForAteacherBtn = (
    <button key={"searchForAteacherBtn"} onClick={searchForAteacherClick}>
      Search for a teacher
    </button>
  );
  const registerBtn = (
    <button key={"registerBtn"} onClick={registerClick}>
      Register
    </button>
  );
  const searchBtn = (
    <button key={"searchBtn"} onClick={searchClick}>
      Search
    </button>
  );
  const newSearchBtn = (
    <button key={"newSearchBtn"} onClick={newSearchClick}>
      New Search
    </button>
  );
  //

  //___________________________________________________________
  // HANDLE NAVIGATION BUTTON CLICKS
  // (for more info, read documentation in the TopBar.jsx)
  useEffect(() => {
    if (messageFromTopBar !== null) {
      if (messageFromTopBar.includes("navFeatures")) {
        setDisplayElement(Features);
        setVisibleButtons(letsBeginBtn);
      } else if (messageFromTopBar.includes("navDatapolicy")) {
        setDisplayElement(DataPolicy);
        setVisibleButtons(letsBeginBtn);
      } else if (messageFromTopBar.includes("navAbout")) {
        setDisplayElement(About);
        setVisibleButtons(letsBeginBtn);
      } else {
        setDisplayElement(HomeDisplay);
        setVisibleButtons(letsBeginBtn);
      }
    }
  }, [messageFromTopBar]);
  //------------------------------------------------------------
  return (
    <>
      {/* THE BUTTONS SHOWN TO THE USER ARE MOUNTED HERE */}
      <span id="button-section">
        <span id="button-container">{visibleButtons}</span>
      </span>
      {/* COMPONENTS SHOWN TO THE USER ARE MOUNTED HERE */}
      <span id="display-section">
        <span id="display-container">{displayElement}</span>
      </span>
    </>
  );
};
//-------------------------------------------------------
export default MainContainer;
