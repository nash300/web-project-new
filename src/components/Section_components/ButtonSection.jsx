// This is the section where it displays the buttons.
// To avoid dependancy issue, The onClick functions are defined in commonContext.jsx

import React, { useContext } from "react";
import { CommonContext } from "../../context_files/commonContext";

// ButtonComponents.jsx
export const LetsBeginBtn = ({ onClick }) => (
  <button key={"letsBeginBtn"} onClick={onClick}>
    Lets Begin!
  </button>
);
export const IwantToLearnBtn = ({ onClick }) => (
  <button onClick={onClick}>I want to learn</button>
);

export const IwantToTeachBtn = ({ onClick }) => (
  <button onClick={onClick}>I want to teach</button>
);

export const IwantToRegisterBtn = ({ onClick }) => (
  <button onClick={onClick}>I want to register</button>
);

export const RegisterBtn = ({ onClick }) => (
  <button onClick={onClick}>Register</button>
);

export const SearchForAstudentBtn = ({ onClick }) => (
  <button onClick={onClick}>Search for a student</button>
);

export const SearchForAteacherBtn = ({ onClick }) => (
  <button onClick={onClick}>Search for a teacher</button>
);

export const SearchBtn = ({ onClick }) => (
  <button onClick={onClick}>Search</button>
);

export const NewSearchBtn = ({ onClick }) => (
  <button onClick={onClick}>New Search</button>
);
//
//***************************************************************************************************************** */
//
const ButtonSection = () => {
  const { visibleButtons } = useContext(CommonContext);

  return (
    <span id="button-section">
      <span id="button-container">{visibleButtons}</span>
    </span>
  );
};

export default ButtonSection;
