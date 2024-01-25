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
