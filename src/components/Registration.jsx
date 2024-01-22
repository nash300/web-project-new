// This file defines the registration form component.
// Users can use this form to register their classified ads in the system.
// In addition to the details entered by the user, the user type and datestamp are automatically included in the validation process.
//---------------------------------------------------------------------------------------------------------------------------------

import { useState } from "react";
import CountryList from "./../utilities/CountryList";
import SubjectDisciplineList from "./../utilities/SubjectDisciplineList";

const Registration = ({ userType }) => {
  //
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [userId, setUserId] = useState("");
  const [about, setAbout] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };
  const handleDisciplineChange = (e) => {
    setSelectedDiscipline(e.target.value);
  };
  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
  };
  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };
  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };
  /* console.log(name);
  console.log(email);
  console.log(selectedCountry);
  console.log(selectedSubject);
 */
  //
  //

  return (
    <div id="registration-form">
      <form action="">
        <label htmlFor="name">
          Name of the {userType} *
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleNameChange}
            value={name}
          />
        </label>

        <label htmlFor="email">
          Email *
          <input
            id="email"
            type="text"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </label>

        {/* Retrieves a list of countries from a pre-defined data file and renders them in the component*/}

        <label htmlFor="country">
          Country *
          <select
            id="country"
            name="country"
            onChange={handleCountryChange}
            value={selectedCountry}
            required
          >
            <option value=""> --- Select your country --- </option>
            {CountryList.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </label>

        {/*Retrieves a list of subjects from a pre-defined data file and displays them along with their corresponding disciplines.
         */}

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
            {/*generating subject list options*/}
            {SubjectDisciplineList.map((subject) => (
              <option key={subject.id} value={subject.name}>
                {subject.name}
              </option>
            ))}
          </select>
        </label>

        {/*generating discipline list options based on the choice of the subject*/}

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
            {/*Iterates through the list of subjects to find the one selected by the user and then iterates through the corresponding array of disciplines.
             */}
            {SubjectDisciplineList.find(
              (obj) => obj.name === selectedSubject
            )?.disciplines.map((discipline, index) => (
              <option key={index} value={discipline}>
                {discipline}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="platform">
          Platform *
          <select
            id="platform"
            name="platform"
            onChange={handlePlatformChange}
            value={selectedPlatform}
            required
          >
            <option value=""> --- Select a platform --- </option>
            <option key={1} value="Zoom meeting">
              Zoom meeting
            </option>
            <option key={2} value="Skype">
              Skype
            </option>
            <option key={3} value="Google Hangouts">
              Google Hangouts
            </option>
            <option key={4} value="Microsoft Teams">
              Microsoft Teams
            </option>
            <option key={5} value="Facetime">
              Facetime
            </option>
          </select>
        </label>

        <label required>
          User ID *
          <input
            id="userid"
            type="text"
            name="userid"
            onChange={handleUserIdChange}
            value={userId}
          />
        </label>

        <label>
          About
          <textarea
            id="about"
            name="about"
            type="text"
            rows="4"
            cols="50"
            onChange={handleAboutChange}
            value={about}
          />
        </label>
      </form>
    </div>
  );
};

export default Registration;
