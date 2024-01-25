import { useContext } from "react";
import { CommonContext } from "../../context_files/commonContext";
import ProfilePage from "./ProfilePage";
import { useEffect } from "react";
import { useState } from "react";
import MessageBox from "../MessageBox";

const SearchResultsPage = ({ searchResults }) => {
  // importing global variables
  const { setDisplayElement } = useContext(CommonContext);

  // State for keeping track if the result array is empty
  const [isEmpty, setIsEmpty] = useState(false);

  // Checking if the result array is empty. If it does, display a message to the user.
  useEffect(() => {
    if (searchResults.length === 0) {
      console.log("No user found");
      setIsEmpty(true);
    }
  }, [searchResults]);

  //---------------------------------------------------------------------------
  // handleOnClick:
  // When the user clicks on "View Profile" button in the search result page,-
  // -this function creates a <Profile page/> component
  // -sends the choosen user object into the component as props
  // -adds that component to the "setDisplay" state.
  const handleOnClick = (userId) => {
    const userObject = searchResults.find((user) => user.id === userId);
    setDisplayElement(<ProfilePage userObject={userObject} />);
  };

  if (!isEmpty) {
    return (
      <ul id="search-result-page">
        {searchResults.map((user) => (
          <li className="result-element" key={user.id}>
            <div className="info-section">
              <span className="title">{user.name}</span>
              <span className="description">{user.about}</span>
              <span className="created-date">
                Created on :{user.created_date}
              </span>
            </div>
            <div className="btn-section">
              <button className="button" onClick={() => handleOnClick(user.id)}>
                View Profile
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <span id="search-result-page">
        <MessageBox
          heading={"No users found"}
          instructions={"Please try a different category"}
        />
      </span>
    );
  }
};

export default SearchResultsPage;
