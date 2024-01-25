// ButtonComponents.jsx
export const LetsBeginBtn = ({ onClick }) => (
  <button className="button" key={"letsBeginBtn"} onClick={onClick}>
    Lets Begin!
  </button>
);
export const IwantToLearnBtn = ({ onClick }) => (
  <button className="button" onClick={onClick}>
    I want to learn
  </button>
);

export const IwantToTeachBtn = ({ onClick }) => (
  <button className="button" onClick={onClick}>
    I want to teach
  </button>
);

export const IwantToRegisterBtn = ({ onClick }) => (
  <button className="button" onClick={onClick}>
    I want to register
  </button>
);

export const SearchForAstudentBtn = ({ onClick }) => (
  <button className="button" onClick={onClick}>
    Search for a student
  </button>
);

export const SearchForAteacherBtn = ({ onClick }) => (
  <button className="button" onClick={onClick}>
    Search for a teacher
  </button>
);

export const NewSearchBtn = ({ onClick }) => (
  <button className="button" onClick={onClick}>
    New Search
  </button>
);
