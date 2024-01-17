import Features from "../display_section_components/pages/Features";
import About from "../display_section_components/pages/About";
import DataPolicy from "../display_section_components/pages/DataPolicy";
import { createContext, useState, useContext } from "react";
import Registration from "../display_section_components/pages/Registration";
import Search from "../display_section_components/pages/Search";
import SearchResults from "../display_section_components/pages/SearchResults";
import Profile from "./../display_section_components/pages/Profile";

export const MyContexts = createContext();

export const ContextProviders = ({ children }) => {
  //**************************   DISPLAY          ******************************* */
  const [displayOutput, setDisplayOutput] = useState(null);

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

  //**************************   BUTTON       ******************************* */

  //Buttons
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

  //
  //
  ///////////////////    Button HOOK       //////////////////////
  //--------------------------------------------------------------------
  const [buttonOutput, setButtonOutput] = useState(() => [letsBegin]);
  //--------------------------------------------------------------------
  //
  //
  // Button handler functions
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

  //
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
      }}
    >
      {children}
    </MyContexts.Provider>
  );
};
