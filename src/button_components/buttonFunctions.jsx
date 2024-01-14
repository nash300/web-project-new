import { useState, useEffect } from "react";

const ButtonFunctions = () => {
  //
  //
  //---------------------------- Buttons  ----------------------------------
  const letsBegin = (
    <button key={"letsBegin"} onClick={() => handleLetsBegin()}>
      Let's Begin !
    </button>
  );
  const iWantToTeach = <button key={"iWantToTeach"}> i Want To Teach</button>;
  const iWantToLearn = <button key={"iWantToLearn"}> i Want To Learn</button>;
  const iWantToRegister = (
    <button key={"iWantToRegister"}>i Want To Register</button>
  );
  const searchForAteacher = (
    <button key={"searchForAteacher"}>search For A teacher</button>
  );
  const searchForAstudent = (
    <button key={"searchForAstudent"}>search For A student</button>
  );
  const Register = <button key={"Register"}>Register</button>;
  const search = <button key={"search"}>search</button>;
  const newSearch = <button key={"newSearch"}>new Search</button>;
  //
  //
  //---------------------------------------------------------------------------------------
  // This hook stores the buttons that should be appeared in the "button section" component,
  //-----------------------------------------------------------------------------------------
  const [buttonOutput, setButtonOutput] = useState(() => [letsBegin]);

  useEffect(() => {
    console.log("In Hook updated");
  }, [buttonOutput]);
  //-----------------------------------------------------------------------------------------
  //
  //-----------------General Functions ---------------------------
  //
  // This function reset the button section to it's "Home" state.
  const resetToHomeBtns = () => {
    setButtonOutput(() => [letsBegin]);
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //-----------------onClick Functions ---------------------------
  //
  function handleLetsBegin() {
    setButtonOutput(() => [iWantToTeach, iWantToLearn]);
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  return { resetToHomeBtns, buttonOutput };
};

export default ButtonFunctions;
