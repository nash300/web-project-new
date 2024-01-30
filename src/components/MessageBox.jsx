/*
=========================================================================
This component is used to display a message to the user.
It defines a simple structure for the message and put the recieved parameter
values into their corresponding places in the structure.
 ========================================================================
*/

import React from "react";

const MessageBox = ({ heading, msgText, instructions }) => {
  return (
    <span className="msg-to-user">
      <br />
      <h2 className="mb-heading">{heading}</h2>
      <p className="mb-text"> {instructions}</p>
      <p className="mb-text">{msgText}</p>
    </span>
  );
};

export default MessageBox;
