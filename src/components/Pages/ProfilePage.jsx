import React from "react";

// This component accepts an object (the selected user in the search result list)-
// Breacks downs it's properties and displays in the corresponding sections.
const ProfilePage = ({ userObject }) => {
  // This function outputs what the user does (eg: Teaches, Learns)
  const userDoes = userObject.user_type === "student" ? "Learns" : "Teached";

  return (
    <div id="user-profile">
      <div>
        <h4 id="name">{userObject.name}</h4>
      </div>

      <div>
        <h4>From</h4>
        <p>{userObject.country}</p>
      </div>

      <div>
        <h4>{userDoes}</h4>
        <p>{userObject.discipline}</p>
      </div>

      <div id="contact-info">
        <h4>Contact Info</h4>
        <div>
          <h5>Platform</h5>
          <p>{userObject.platform}</p>
        </div>

        <div>
          <h5>User ID: </h5>
          <p>{userObject.user_id}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
