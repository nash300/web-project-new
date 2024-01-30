/*
=================================================================================
- This file renders the Prifile page of the user.
- This component accepts an object (the selected user in the search result list)-
- Breacks downs it's properties and displays in the corresponding sections.
=================================================================================
*/

import React from "react";

const ProfilePage = ({ userObject }) => {
  // This function outputs the role of the user (eg: Teaches, Learns)
  // It is used to display the user's role in the user profile.
  const userDoes = userObject.user_type === "student" ? "Learns" : "Teached";

  // - Here, the user object properties are broken down and inserted into their corresponding positions for display.
  return (
    <div id="user-profile">
      <span id="name-section">
        <div>
          <h4 id="name">{userObject.name}</h4>
        </div>
      </span>

      <span id="info-side">
        <div>
          <h4>From:</h4>
          <p>{userObject.country}</p>
        </div>

        <div>
          <h4>{userDoes}:</h4>
          <p>{userObject.discipline}</p>
        </div>

        <div>
          <h4>Platform:</h4>
          <p>{userObject.platform}</p>
        </div>

        <div>
          <h4>User ID:</h4>
          <p>{userObject.user_id}</p>
        </div>
      </span>

      <div id="about-side">
        <h4>About me:</h4>
        <p>{userObject.about}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
