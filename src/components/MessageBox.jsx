import React from "react";

const MessageBox = ({ heading, msgText, instructions }) => {
  return (
    <span className="msg-to-user">
      <br />
      <h2>{heading}</h2>
      <p>{msgText}</p>
      <p>{instructions}</p>
    </span>
  );
};

export default MessageBox;
