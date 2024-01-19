import Features from "../display_section_components/pages/Features";
import About from "../display_section_components/pages/About";
import DataPolicy from "../display_section_components/pages/DataPolicy";
import { createContext, useState, useContext } from "react";
import Registration from "../display_section_components/pages/Registration";
import Search from "../display_section_components/pages/Search";
import SearchResults from "../display_section_components/pages/SearchResults";
import Profile from "./../display_section_components/pages/Profile";
import Home from "./../display_section_components/pages/Home";

export const MyContexts = createContext();

export const ContextProviders = ({ children }) => {
  //
  //______________________________________________________________________
  // USESTATE FOR USER TYPE
  // - This useState is used for tracking the user type: ex: student/teacher
  //______________________________________________________________________
  const [userType, setUserType] = useState(null);

  const setUserTypeToStudent = () => {
    setUserType("student");
  };
  const setUserTypeToTeacher = () => {
    setUserType("teacher");
  };
  const resetUserType = () => {
    setUserType(null);
  };

  //
  //
  //*******************************************************************************************************
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   DISPLAY SECTION PAGES   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //*******************************************************************************************************
  //
  //______________________________________________________________________________________________
  // USESTATE FOR DISPLAY SECTION
  // - This useState stores the active display element which is displayed in the "Display Section"
  // - Only the static pages are handled in this
  //______________________________________________________________________________________________
  const [displayOutput, setDisplayOutput] = useState(Home);
  //
  //_______________________________________________________________________
  // DISPLAY SECTION'S "SET" FUNCTIONS
  //_______________________________________________________________________
  // - These set-functions are used to mount components into the display area
  // - Changing the display component is done by using these functions
  const resetDisplay = () => {
    setDisplayOutput(Home);
  };

  const setDisplayToFeatures = () => {
    setDisplayOutput(Features);
  };

  const setDisplayToAbout = () => {
    setDisplayOutput(About);
  };

  const setDisplayToDataPolicy = () => {
    setDisplayOutput(DataPolicy);
  };

  const setDisplayToRegister = () => {
    setDisplayOutput(Registration);
  };

  const setDisplayToSearch = () => {
    setDisplayOutput(Search);
  };

  const setDisplayToSearchResults = () => {
    setDisplayOutput(SearchResults);
  };

  const setDisplayToProfile = () => {
    setDisplayOutput(Profile);
  };

  //
  //***********************************************************************************************
  //>>>>>>>>>>>>>>>>>>>>>>>>>     BUTTON + THERE FUNCTIONS     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //***********************************************************************************************
  //
  //__________________________________________________________________________
  // BUTTONS USED IN THE DISPLAY SECTION
  //__________________________________________________________________________
  // - These are the buttons that appears in the Button Section
  // - Each button has it's own handleClick function which performs the action(s)
  const letsBegin = (
    <button
      key={"letsBegin"}
      onClick={() => {
        handleLetsBeginClick();
      }}
    >
      Let's Begin !
    </button>
  );
  const iWantToTeach = (
    <button key={"iWantToTeach"} onClick={() => handleIwantToTeachClick()}>
      i Want To Teach
    </button>
  );
  const iWantToLearn = (
    <button key={"iWantToLearn"} onClick={() => handleIwantToLearnClick()}>
      i Want To Learn
    </button>
  );
  const iWantToRegister = (
    <button
      key={"iWantToRegister"}
      onClick={() => handleIwantToRegisterClick()}
    >
      i Want To Register
    </button>
  );
  const searchForAteacher = (
    <button
      key={"searchForAteacher"}
      onClick={() => handleSearchForAteacherClick()}
    >
      search For A teacher
    </button>
  );
  const searchForAstudent = (
    <button
      key={"searchForAstudent"}
      onClick={() => handleSearchForAstudentClick()}
    >
      search For A student
    </button>
  );
  const Register = (
    <button key={"Register"} onClick={() => handleRegisterClick()}>
      Register
    </button>
  );
  const search = (
    <button key={"search"} onClick={() => handleSearchClick()}>
      search
    </button>
  );
  const newSearch = (
    <button key={"newSearch"} onClick={() => handleNewSearchClick()}>
      new Search
    </button>
  );

  const ViewProfile = () => {
    return (
      <button onClick={() => handleViewProfileClick()}>view Profile</button>
    );
  };

  //____________________________________________________________________
  //  USESTATE FOR HOLDING THE ACTIVE BUTTONS
  // - This useState holds the activated button(s) at a given dialog mask
  //____________________________________________________________________
  const [buttonOutput, setButtonOutput] = useState(() => [letsBegin]);
  //
  //____________________________________________________________________
  //
  //_
  //***********************************************************************************************
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>     SYSTEM FUNCTIONS     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //***********************************************************************************************
  //
  // RESETS EVERY USESTATE INTO THERE INITIAL STATES. (BRINGS THE NAVIGATION TO THE HOME PAGE)
  const masterReset = () => {
    resetDisplay();
    resetUserType();
    resetButtonOutput();
  };
  //
  // BUTTON ON-CLICK FUNCTIONS
  //__________________________________________________________________
  // - These functions handle the onClick events.
  // - This is the core of the whole website's functionality.
  // - Definitions Of the onClick functions
  //____________________________________________________________________
  const handleLetsBeginClick = () => {
    setButtonOutput([iWantToTeach, iWantToLearn]);
    resetDisplay();
  };

  const handleIwantToTeachClick = () => {
    setButtonOutput([iWantToRegister, searchForAstudent]);
    setUserTypeToTeacher();
  };

  const handleIwantToLearnClick = () => {
    setButtonOutput([iWantToRegister, searchForAteacher]);
    setUserTypeToStudent();
  };

  const handleIwantToRegisterClick = () => {
    setButtonOutput(() => [Register]), setDisplayToRegister();
  };

  const handleSearchForAteacherClick = () => {
    setButtonOutput(() => [search]);
    setDisplayToSearch();
    setUserTypeToStudent();
  };

  const handleSearchForAstudentClick = () => {
    setButtonOutput(() => [search]);
    setDisplayToSearch();
    setUserTypeToTeacher();
  };

  const handleSearchClick = () => {
    setButtonOutput(() => [newSearch]);
    setDisplayToSearchResults();
  };

  const handleRegisterClick = () => {
    setButtonOutput(() => [searchForAstudent, searchForAteacher]);
    setDisplayToProfile();
  };

  const handleNewSearchClick = () => {
    setButtonOutput(() => [search]);
    setDisplayToSearch();
  };

  const handleViewProfileClick = () => {
    setDisplayOutput(Profile);
  };

  const resetButtonOutput = () => {
    setButtonOutput(() => [letsBegin]);
  };

  //
  // ====================================================================================================================================
  return (
    <MyContexts.Provider
      value={{
        displayOutput,
        setDisplayOutput,
        setDisplayToFeatures,
        setDisplayToAbout,
        setDisplayToDataPolicy,
        buttonOutput,
        handleIwantToRegisterClick,
        handleSearchForAteacherClick,
        handleSearchClick,
        resetButtonOutput,
        handleLetsBeginClick,
        handleRegisterClick,
        userType,
        setUserTypeToStudent,
        setUserTypeToTeacher,
        ViewProfile,
        masterReset,
      }}
    >
      {children}
    </MyContexts.Provider>
  );
};
