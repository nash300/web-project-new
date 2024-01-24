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

export const SearchForAstudentBtn = ({ onClick }) => (
  <button onClick={onClick}>Search for a student</button>
);

export const SearchForAteacherBtn = ({ onClick }) => (
  <button onClick={onClick}>Search for a teacher</button>
);

export const NewSearchBtn = ({ onClick }) => (
  <button onClick={onClick}>New Search</button>
);
