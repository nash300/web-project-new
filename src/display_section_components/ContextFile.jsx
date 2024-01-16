import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import DataPolicy from "./pages/DataPolicy";
import { createContext, useState, useContext } from "react";
import Registration from "./pages/Registration";

export const MyContexts = createContext();

export const ContextProviders = ({ children }) => {
  //**************************   DISPLAY          ******************************* */
  const [displayOutput, setDisplayOutput] = useState(Registration);

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

  const handleSearchForAteacherClick = () => setButtonOutput(() => [search]);

  const handleSearchForAstudentClick = () => setButtonOutput(() => [search]);

  const handleSearchClick = () => setButtonOutput(() => [newSearch]);

  //not done yet
  const handleRegisterClick = () => setButtonOutput(() => [search]);

  const handleNewSearchClick = () => setButtonOutput(() => [search]);

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
