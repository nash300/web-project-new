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
//
// The navBtn parameter comes from the <App/> component. It contains the onClick info from the navigation menu.
const MainContainer = ({ navBtn }) => {
  //___________________________________________________
  // STATE:  CURRENT USER TYPE (eg: student, teacher)
  //___________________________________________________
  const [userType, setUserType] = useState(null);
  //
  //______________________________________________________________________________________
  // STATE:  CURRENT DISPLAY COMPONENT
  // This section defines the state object for managing the currently displayed component.
  // The "displayElement" object is directly rendered by the "Display section" component.
  //______________________________________________________________________________________
  const [displayElement, setDisplayElement] = useState(HomeDisplay);

  //___________________________________________________________________________________________________________________
  // STATE:  VISIBLE BUTTONS
  // This section defines the state object for managing the visible buttons.
  // The "visibleButtons" object is directly rendered by the "Button section" component.
  // To avoid circular dependencies, the initial state button and its corresponding onClick functions are defined here.
  // The remaining definitions are located below.
  //___________________________________________________________________________________________________________________
  const letsBeginClick = () => {
    setVisibleButtons([
      <IwantToLearnBtn key={"IwantToLearnBtn"} onClick={iWantToLearnClick} />,
      <IwantToTeachBtn key={"IwantToTeachBtn"} onClick={iWantToTeachClick} />,
    ]);
    setDisplayElement(HomeDisplay);
    setUserType(null);
  };
  const LetsBeginBtn = ({ onClick }) => (
    <button key={"letsBeginBtn"} onClick={onClick}>
      Lets Begin!
    </button>
  );
  const [visibleButtons, setVisibleButtons] = useState(() => (
    <LetsBeginBtn key={"LetsBeginBtn"} onClick={letsBeginClick} />
  ));
  //
  //_____________________________________________________________
  //  BUTTON ON-CLICK FUNCTIONS
  // This section defines the callback functions triggered when buttons are clicked.

  const iWantToTeachClick = () => {
    setVisibleButtons([
      <IwantToRegisterBtn
        key={"IwantToRegisterBtn"}
        onClick={iWantToRegisterClick}
      />,
      <SearchForAstudentBtn
        key={"SearchForAstudentBtn"}
        onClick={searchForAstudentClick}
      />,
    ]);
    setUserType("teacher");
  };

  const iWantToLearnClick = () => {
    setVisibleButtons([
      <IwantToRegisterBtn
        key={"IwantToRegisterBtn"}
        onClick={iWantToRegisterClick}
      />,
      <SearchForAteacherBtn
        key={"SearchForAteacherBtn"}
        onClick={searchForAteacherClick}
      />,
    ]);
    setUserType("student");
  };

  // The sub-functions are wrapped in a setUserType function to ensure the current registered user type is recieved by the corresponding component.
  const iWantToRegisterClick = () => {
    setUserType((prevUserType) => {
      setDisplayElement(<Registration userType={prevUserType} />);
      setVisibleButtons([
        <RegisterBtn key={"RegisterBtn"} onClick={registerClick} />,
      ]);
      return prevUserType;
    });
  };

  const searchForAstudentClick = () => {
    setDisplayElement(Search);
    setVisibleButtons([<SearchBtn key={"SearchBtn"} onClick={searchClick} />]);
    setUserType("student");
  };

  const searchForAteacherClick = () => {
    setDisplayElement(Search);
    setVisibleButtons([<SearchBtn key={"SearchBtn"} onClick={searchClick} />]);
    setUserType("teacher");
  };

  const registerClick = () => {
    setDisplayElement(Profile);
    setVisibleButtons([
      <SearchForAstudentBtn
        key={"SearchForAstudentBtn"}
        onClick={searchForAstudentClick}
      />,
      <SearchForAteacherBtn
        key={"SearchForAteacherBtn"}
        onClick={searchForAteacherClick}
      />,
    ]);
  };

  const searchClick = () => {
    setDisplayElement(SearchResults);
    setVisibleButtons([
      <NewSearchBtn key={"NewSearchBtn"} onClick={newSearchClick} />,
    ]);
  };

  const newSearchClick = () => {
    setDisplayElement(Search);
    setVisibleButtons(<SearchBtn key={"SearchBtn"} onClick={searchClick} />);
  };

  //_________________________________________________________________________
  // DEFINICTIONS OF BUTTONS
  // This section outlines the definitions of the buttons used in the application.

  const IwantToLearnBtn = ({ onClick }) => (
    <button onClick={onClick}>I want to learn</button>
  );
  const IwantToTeachBtn = ({ onClick }) => (
    <button onClick={onClick}>I want to teach</button>
  );
  const IwantToRegisterBtn = ({ onClick }) => (
    <button onClick={onClick}>I want to register</button>
  );
  const SearchForAstudentBtn = ({ onClick }) => (
    <button onClick={onClick}>Search for a student</button>
  );
  const SearchForAteacherBtn = ({ onClick }) => (
    <button onClick={onClick}>Search for a teacher</button>
  );
  const RegisterBtn = ({ onClick }) => (
    <button onClick={onClick}>Register</button>
  );
  const SearchBtn = ({ onClick }) => <button onClick={onClick}>Search</button>;
  const NewSearchBtn = ({ onClick }) => (
    <button onClick={onClick}>New Search</button>
  );
  //

  //___________________________________________________________
  // HANDLE NAVIGATION BUTTON CLICKS
  // (for more info, read documentation in the TopBar.jsx)
  useEffect(() => {
    if (navBtn !== null) {
      if (navBtn.includes("navFeatures")) {
        setDisplayElement(Features);
        setVisibleButtons(
          <LetsBeginBtn key={"LetsBeginBtn"} onClick={letsBeginClick} />
        );
      } else if (navBtn.includes("navDatapolicy")) {
        setDisplayElement(DataPolicy);
        setVisibleButtons(
          <LetsBeginBtn key={"LetsBeginBtn"} onClick={letsBeginClick} />
        );
      } else if (navBtn.includes("navAbout")) {
        setDisplayElement(About);
        setVisibleButtons(
          <LetsBeginBtn key={"LetsBeginBtn"} onClick={letsBeginClick} />
        );
      } else {
        setDisplayElement(HomeDisplay);
        setVisibleButtons(
          <LetsBeginBtn key={"LetsBeginBtn"} onClick={letsBeginClick} />
        );
      }
    }
  }, [navBtn]);
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
