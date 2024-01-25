import SubjectDisciplineList from "../../utilities/SubjectDisciplineList";
import supabase from "../../utilities/SupabaseConfiguration";
import { CommonContext } from "../../context_files/commonContext";
import { useContext, useState } from "react";
import SearchResultsPage from "./SearchResultsPage";

const SearchPage = () => {
  // Importing global variables and functions from the commonContext file
  const { userType, NewSearchBtn, setVisibleButtons, setDisplayElement } =
    useContext(CommonContext);

  // States to store user choices
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("");
  // State for tracking the submission status of the request to the server
  const [isSuccessful, setIsSuccessful] = useState(false);
  // State for storing the fetched data from the server
  const [searchResults, setSearchResults] = useState([]);

  // Input change handle functions
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };
  const handleDisciplineChange = (e) => {
    setSelectedDiscipline(e.target.value);
  };

  const handleNewSearchClick = () => {
    setIsSuccessful(false);
    setVisibleButtons(null);
    setDisplayElement(<SearchPage />);
  };

  // Main handle function for submission
  //_____________________________________________________________________
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Preparing the data to be sent to the supabase API.
    const searchData = {
      subject: selectedSubject,
      discipline: selectedDiscipline,
      // Assuming the user always search for a opposite user type, the userType searching for is automatically converted to the opposite.
      user_type: userType === "student" ? "teacher" : "student",
    };

    //--------------------------------------------------------------------
    // COPIED CODE SNIPPET: handling data transaction to the API
    //--------------------------------------------------------------------
    try {
      // Insert the registration data into the Supabase table
      const { data, error } = await supabase
        .from("users") // My table name in supabase.
        .select() // selecting all records
        .eq("subject", searchData.subject) // user selected choice
        .eq("discipline", searchData.discipline) // user selected choice
        .eq("user_type", searchData.user_type); // user selected choice

      if (error) {
        console.error("Error submitting data:", error.message);
      } else {
        // This section executes only if the data transaction is sucsessfull.
        //___________________________________________________________________
        console.log("Data searched for", searchData);
        console.log("Data recieved", data);
        setSearchResults(data);
        setIsSuccessful(true);
        // Appears "New Search button with reset functionality"
        setVisibleButtons(<NewSearchBtn onClick={handleNewSearchClick} />);
      }
      // Error handling section
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
  };

  // RETURN SECTION
  //_________________________________________________________________________________________________________________
  if (isSuccessful === false) {
    return (
      <div id="search-form">
        <form action="">
          <label htmlFor="subject">
            Subject *
            <select
              id="subject"
              name="subject"
              onChange={handleSubjectChange}
              value={selectedSubject}
              required
            >
              <option value=""> --- Select a subject --- </option>
              {/* Generating subject list options */}
              {SubjectDisciplineList.map((subject) => (
                <option key={subject.id} value={subject.name}>
                  {subject.name}
                </option>
              ))}
            </select>
          </label>
          {/* Generating discipline list options based on the choice of the subject */}
          <label htmlFor="discipline">
            Discipline *
            <select
              id="discipline"
              name="discipline"
              onChange={handleDisciplineChange}
              value={selectedDiscipline}
              required
            >
              <option value=""> --- Select a discipline --- </option>
              {/* Iterates through the list of subjects to find the one selected by the user and then iterates through the corresponding array of disciplines. */}
              {SubjectDisciplineList.find(
                (obj) => obj.name === selectedSubject
              )?.disciplines.map((discipline, index) => (
                <option key={index} value={discipline}>
                  {discipline}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className="button" onClick={handleFormSubmit}>
            Search
          </button>
        </form>
      </div>
    );
  } else {
    // Setting the result page after a sucsesful submission.
    return <SearchResultsPage searchResults={searchResults} />;
  }
};
export default SearchPage;
