// This file defines all global "States" and "contextProviders" that are used by other components in this website.
// The definictions follow the order as they are used by the <App/> component.
// The MainContainer(consists of two sections) :
//   1. Button section: Handles user interactions and button clicks.
//   2. Display section: Renders output components, such as pages and forms.
//----------------------------------------------------------------------------------------------------------------

import React, { createContext, useState } from "react";
// Importing pages
import HomePage from "../components/Pages/HomePage";
import AboutPage from "../components/Pages/AboutPage";
import FeaturesPage from "../components/Pages/FeaturesPage";
import DataPolicyPage from "../components/Pages/DataPolicyPage";
import RegistrationPage from "../components/Pages/RegistrationPage";
import SearchPage from "../components/Pages/SearchPage";
import ProfilePage from "../components/Pages/ProfilePage";
// Importing the buttons (Button components)
import {
  IwantToLearnBtn,
  IwantToTeachBtn,
  IwantToRegisterBtn,
  SearchForAstudentBtn,
  SearchForAteacherBtn,
  LetsBeginBtn,
} from "../utilities/Buttons";

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
  const [displayElement, setDisplayElement] = useState(HomePage);

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
    setDisplayElement(HomePage);
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
    setDisplayElement(HomePage);
  };
  // Navigation button click: ("Features" button)
  const featuresClick = () => {
    resetToHome();
    setDisplayElement(FeaturesPage);
  };
  // Navigation button click: ("Data Policy" button)
  const dataPolicyClick = () => {
    resetToHome();
    setDisplayElement(DataPolicyPage);
  };
  // Navigation button click: ("About" button)
  const aboutClick = () => {
    resetToHome();
    setDisplayElement(AboutPage);
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
    setDisplayElement(<RegistrationPage />);
    setVisibleButtons(null);
  };

  // Dialog flow button: ("Search for a student" button)
  const searchForAstudentClick = () => {
    setDisplayElement(<SearchPage />);
    setVisibleButtons(null);
  };
  // Dialog flow button: ("Search for a teacher" button)
  const searchForAteacherClick = () => {
    setDisplayElement(<SearchPage />);
    setVisibleButtons(null);
  };

  // Other functions --------------------------------------------------
  // These are the buttons that appear right after a user registers.
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

  // This functions renders the Profile page to the screen.
  const setToProfilePage = () => {
    setDisplayElement(ProfilePage);
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
        setToProfilePage,
        setDisplayElement,
        setVisibleButtons,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};
