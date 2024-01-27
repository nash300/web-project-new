// This file defines the registration form component.
// Users can use this form to register their classified ads in the system.
// In addition to the details entered by the user, the user type and datestamp are automatically included in the validation process.
//---------------------------------------------------------------------------------------------------------------------------------

import React, { useContext, useState } from "react";
import CountryList from "../../utilities/CountryList";
import SubjectDisciplineList from "../../utilities/SubjectDisciplineList";
import supabase from "../../utilities/SupabaseConfiguration";
import { CommonContext } from "../../context_files/commonContext";
import MessageBox from "../MessageBox";

const RegistrationPage = () => {
  const { studentSearchTeacher, teacherSearchStudent, userType } =
    useContext(CommonContext);
  //________________________________________________________________
  // STATES : Tracking data from user inputs

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [userId, setUserId] = useState("");
  const [about, setAbout] = useState("");
  //________________________________________
  // Handlers for user actions
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
  //-------------------------------------------------------------------------
  const [isSubmitted, setIsSubmitted] = useState(false);

  //-------------------------------------------------------------------------

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //___________________________________________________
    // Preparing the data to be sent to the supabase API.
    const registrationData = {
      name: name,
      email: email,
      country: selectedCountry,
      subject: selectedSubject,
      discipline: selectedDiscipline,
      platform: selectedPlatform,
      user_id: userId,
      about: about,
      user_type: userType,
      created_date: new Date(),
    };

    //--------------------------------------------------------------------
    // COPIED CODE SNIPPET: handling data transaction to the API
    //--------------------------------------------------------------------
    try {
      // Insert the registration data into the Supabase table
      const { data, error } = await supabase
        .from("users") // My table name in supabase.
        .insert([registrationData]);

      if (error) {
        console.error("Error submitting data:", error.message);
      } else {
        console.log("Data submitted successfully:", registrationData);
        setIsSubmitted(true);
        userType === "student"
          ? studentSearchTeacher()
          : teacherSearchStudent();
      }
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
  };

  //----------------------------------------------------------------------

  return (
    <div id="registration-form">
      {isSubmitted ? (
        <MessageBox
          heading="Registration is successful!"
          msgText={`Your details are now visible to all ${
            userType === "student" ? "teachers" : "students"
          }`}
          instructions="Thank you for registering!"
        />
      ) : (
        <form id="submit-form" onSubmit={handleFormSubmit}>
          <label htmlFor="name">
            Name of the {userType} *
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleNameChange}
              value={name}
              required
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
              required
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
          <label>
            User ID *
            <input
              id="userid"
              type="text"
              name="userid"
              onChange={handleUserIdChange}
              value={userId}
              required
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
          <button type="submit" onClick={() => handleFormSubmit}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default RegistrationPage;
