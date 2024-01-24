import { useContext } from "react";
import { CommonContext } from "../../context_files/commonContext";
import ProfilePage from "./ProfilePage";

const SearchResultsPage = ({ searchResults }) => {
  const { setDisplayElement } = useContext(CommonContext);

  // handleOnclik:
  // When the user clicks on "View Profile" button in the search result page,-
  // -this function creates a <Profile page/> component
  // -sends the choosen user object into the component as props
  // -adds that component to the "setDisplay" state.
  const handleOnclik = (userId) => {
    const userObject = searchResults.find((user) => user.id === userId);
    setDisplayElement(<ProfilePage userObject={userObject} />);
  };

  return (
    <ul id="search-result-page">
      {searchResults.map((user) => (
        <li className="result-element" key={user.id}>
          <div className="info-section">
            <span className="title">{user.name}</span>
            <span className="description">{user.about}</span>
          </div>
          <div className="btn-section">
            <button onClick={() => handleOnclik(user.id)}>View Profile</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResultsPage;
