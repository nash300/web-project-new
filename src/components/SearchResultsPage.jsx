const SearchResultsPage = ({ searchResults }) => {
  return (
    <ul id="search-result-page">
      {searchResults.map((user) => (
        <li className="result-element" id={user.id}>
          <div className="info-section">
            <span className="title">{user.name}</span>
            <span className="description">{user.about}</span>
          </div>
          <div className="btn-section">
            <button>View Profile</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResultsPage;
