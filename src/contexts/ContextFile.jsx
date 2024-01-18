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
  //
  //__________________________________________________________
  // useState for tracking the user type: ex: student/teacher |
  //__________________________________________________________|
  const [userType, setUserType] = useState(null);

  const setToStudent = () => {
    setUserType("student");
  };
  const setToTeacher = () => {
    setUserType("teacher");
  };

  //
  //
  //
  //**********************************************************************************************************************************************
  // DISPLAY SECTION  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //**********************************************************************************************************************************************
  //
  //_______________________________________________________________________________
  //   This useState stores the outputs to be displayed in the "Display Section"   |
  //_______________________________________________________________________________|
  const [displayOutput, setDisplayOutput] = useState(Home);
  //
  //___________________________________________________________________
  // DISPLAY SECTION FUNCTIONS
  //___________________________________________________________________
  // These functions are used to mount components into the display area
  //-------------------------------------------------------------------
  const setDisplayToHome = () => {
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
  //***********************************************************************************************************************************************
  //  BUTTON SECTION  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //***********************************************************************************************************************************************
  //
  //_______________________________________________________________________
  // BUTTONS
  //_______________________________________________________________________
  // These are the buttons used in the "Button Section"
  //_______________________________________________________________________
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

  //____________________________________________________________________
  //        This useState stores the buttons to be displayed            |
  //____________________________________________________________________|
  const [buttonOutput, setButtonOutput] = useState(() => [letsBegin]);
  //
  //
  //____________________________________________________________________
  // DISPLAY SECTION FUNCTIONS
  //____________________________________________________________________
  // Definitions Of the onClick functions
  //____________________________________________________________________
  const handleLetsBeginClick = () => {
    setButtonOutput([iWantToTeach, iWantToLearn]);
    setDisplayToHome();
  };

  const handleIwantToTeachClick = () =>
    setButtonOutput(() => [iWantToRegister, searchForAstudent]);

  const handleIwantToLearnClick = () =>
    setButtonOutput(() => [iWantToRegister, searchForAteacher]);

  const handleIwantToRegisterClick = () => {
    setButtonOutput(() => [Register]), setDisplayToRegister();
  };

  const handleSearchForAteacherClick = () => {
    setButtonOutput(() => [search]);
    setDisplayToSearch();
  };

  const handleSearchForAstudentClick = () => {
    setButtonOutput(() => [search]);
    setDisplayToSearch();
  };

  const handleSearchClick = () => {
    setButtonOutput(() => [newSearch]);
    setDisplayToSearchResults();
  };

  //not done yet
  const handleRegisterClick = () => {
    setButtonOutput(() => [searchForAstudent, searchForAteacher]);
    setDisplayToProfile();
  };

  const handleNewSearchClick = () => {
    setButtonOutput(() => [search]);
    setDisplayToSearch();
  };

  // sets the button section to it's initial state.
  const resetButtonOutput = () => {
    setButtonOutput(() => [letsBegin]);
  };
  //
  //
  return (
    <MyContexts.Provider
      value={{
        displayOutput,
        setDisplayOutput,
        setDisplayToHome,
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
        setToStudent,
        setToTeacher,
      }}
    >
      {children}
    </MyContexts.Provider>
  );
};
