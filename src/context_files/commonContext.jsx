// This file defines all global "States" and "contextProviders" that are used by other components in this website.
// The definictions follow the order as they are used by the <App/> component.
// The MainContainer(consists of two sections) :
//   1. Button section: Handles user interactions and button clicks.
//   2. Display section: Renders output components, such as pages and forms.
//----------------------------------------------------------------------------------------------------------------

import React, { createContext, useState } from "react";
// Importing pages
import HomeDisplay from "../components/Home";
import About from "../components/About";
import Features from "../components/Features";
import DataPolicy from "../components/DataPolicy";
import Registration from "../components/Registration";
import Search from "../components/Search";

// Importing the buttons (Button components)
import {
  IwantToLearnBtn,
  IwantToTeachBtn,
  IwantToRegisterBtn,
  SearchForAstudentBtn,
  SearchForAteacherBtn,
  SearchBtn,
  NewSearchBtn,
  LetsBeginBtn,
  RegisterBtn,
} from "../components/Section_components/ButtonSection";

export const CommonContext = createContext();

export const CommonContextProvider = ({ children }) => {
  //
  //***************************************************
  // STATE:  CURRENT USER TYPE (eg: student, teacher)
  //***************************************************
  // - Keeps track of the user type.
  //___________________________________________________
  const [userType, setUserType] = useState(null);
  console.log("User type :", userType);

  //**************************************************************************************
  // STATE:  CURRENT DISPLAY COMPONENT
  //**************************************************************************************
  // This section defines the state object for managing the currently displayed component.
  // The "displayElement" object is directly rendered by the "Display section" component.
  //______________________________________________________________________________________
  const [displayElement, setDisplayElement] = useState(HomeDisplay);

  //*******************************************************************************************************************
  // STATE:  VISIBLE BUTTONS
  //*******************************************************************************************************************
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

  const [visibleButtons, setVisibleButtons] = useState(() => (
    <LetsBeginBtn key={"LetsBeginBtn"} onClick={letsBeginClick} />
  ));

  //_______________________________________________________________________________
  //  BUTTON ON-CLICK FUNCTIONS
  // This section defines the callback functions triggered when buttons are clicked.

  // This function brings the whole site into it's initial state.
  // Navigation button click: ("Features" button)
  const resetToHome = () => {
    setVisibleButtons([
      <LetsBeginBtn key={"LetsBeginBtn"} onClick={letsBeginClick} />,
    ]);
    setUserType(null);
    setDisplayElement(HomeDisplay);
  };
  // Navigation button click: ("Features" button)
  const featuresClick = () => {
    resetToHome();
    setDisplayElement(Features);
  };
  // Navigation button click: ("Data Policy" button)
  const dataPolicyClick = () => {
    resetToHome();
    setDisplayElement(DataPolicy);
  };
  // Navigation button click: ("About" button)
  const aboutClick = () => {
    resetToHome();
    setDisplayElement(About);
  };

  // Dialog flow button: ("I want to teach" button)
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

  // Dialog flow button: ("I want to learn" button)
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

  // Dialog flow button: ("I want to register" button)
  const iWantToRegisterClick = () => {
    setDisplayElement(<Registration />);
    setVisibleButtons(null);
  };

  // Dialog flow button: ("Search for a student" button)
  const searchForAstudentClick = () => {
    setDisplayElement(<Search />);
    setVisibleButtons(null);
  };
  // Dialog flow button: ("Search for a teacher" button)
  const searchForAteacherClick = () => {
    setDisplayElement(<Search />);
    setVisibleButtons(null);
  };

  // Dialog flow button: ("Search" button)
  const searchClick = () => {
    setDisplayElement(SearchResults);
    setVisibleButtons([
      <NewSearchBtn key={"NewSearchBtn"} onClick={newSearchClick} />,
    ]);
  };
  // Dialog flow button: ("New Search" button)
  const newSearchClick = () => {
    setDisplayElement(Search);
    setVisibleButtons(<SearchBtn key={"SearchBtn"} onClick={searchClick} />);
  };

  // Other functions --------------------------------------------------
  const studentSearchTeacher = () => {
    setVisibleButtons([
      <SearchForAteacherBtn
        key={"SearchForAteacherBtn"}
        onClick={searchForAteacherClick}
      />,
    ]);
  };
  const teacherSearchStudent = () => {
    setVisibleButtons([
      <SearchForAstudentBtn
        key={"SearchForAstudentBtn"}
        onClick={searchForAstudentClick}
      />,
    ]);
  };

  return (
    <CommonContext.Provider
      value={{
        displayElement,
        visibleButtons,
        letsBeginClick,
        resetToHome,
        featuresClick,
        dataPolicyClick,
        aboutClick,
        studentSearchTeacher,
        teacherSearchStudent,
        userType,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};
