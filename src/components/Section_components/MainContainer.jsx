import { useState } from "react";
import Home from "../Home";
import Search from "../Search";
import Registration from "./../Registration";
import Profile from "./../Profile";
import SearchResults from "./../SearchResults";

const MainContainer = ({ messageFromTopBar }) => {
  console.log("Message from topbar:", messageFromTopBar);
  //
  //_____________________________________________________________
  // STATE FOR HOLDING CURRENT DISPLAY COMPONENT
  //_____________________________________________________________
  const [displayElement, setDisplayElement] = useState(Home);

  //_____________________________________________________________
  // STATE FOR HOLDING VISIBLE BUTTONS
  //_____________________________________________________________
  const letsBeginClick = () => {
    setVisibleButtons([iWantToLearnBtn, iWantToTeachBtn]);
  };
  const letsBegin = (
    <button key={"letsBegin"} onClick={letsBeginClick}>
      Lets Begin!
    </button>
  );
  const [visibleButtons, setVisibleButtons] = useState(letsBegin);

  //_____________________________________________________________
  //  BUTTON ON-CLICK FUNCTIONS

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
  //
  //------------------------------------------------------------
  return (
    <>
      <span id="button-section">
        <span id="button-container">{visibleButtons}</span>
      </span>
      <span id="display-section">
        <span id="display-container">{displayElement}</span>
      </span>
    </>
  );
};
//-------------------------------------------------------
export default MainContainer;
