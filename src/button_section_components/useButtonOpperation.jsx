import { useState, useEffect } from "react";
import { useDisplayOpperation } from "../display_section_components/useDisplayOpperation";

//-----------------------------------------------------------------------------

export const useButtonOpperation = () => {
  const { setDisplayToHome } = useDisplayOpperation();

  //
  //
  //
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

  //
  ///////////////////    Button Output Hook       //////////////////////
  //--------------------------------------------------------------------
  const [buttonOutput, setButtonOutput] = useState(() => [letsBegin]);
  //--------------------------------------------------------------------
  //
  //
  //

  const handleLetsBeginClick = () => {
    setButtonOutput([iWantToTeach, iWantToLearn]);
    setDisplayToHome();
    console.log("button executed");
  };

  const handleIwantToTeachClick = () =>
    setButtonOutput(() => [iWantToRegister, searchForAstudent]);

  const handleIwantToLearnClick = () =>
    setButtonOutput(() => [iWantToRegister, searchForAteacher]);

  const handleIwantToRegisterClick = () => setButtonOutput(() => [Register]);

  const handleSearchForAteacherClick = () => setButtonOutput(() => [search]);

  const handleSearchForAstudentClick = () => setButtonOutput(() => [search]);

  const handleSearchClick = () => setButtonOutput(() => [newSearch]);

  //
  //
  //

  //not done yet
  const handleRegisterClick = () => setButtonOutput(() => [search]);

  const handleNewSearchClick = () => setButtonOutput(() => [search]);

  //
  //
  //
  const resetButtonOutput = () => {
    setButtonOutput(() => [letsBegin]);
  };
  //
  //
  //
  //
  //

  return {
    buttonOutput,
    resetButtonOutput,
    letsBegin,
  };
};
//---------------------------------------------------------------------------------
//
//
//
