import React from "react";
import "./index.css";
import "./css/pageStyles.css";
import bgVideo from "./images/bgv.mp4";

import TopBar from "./components/TopBar";
import MainContainer from "./components/Section_components/MainContainer";
import { useState } from "react";

const App = () => {
  // State to store the message received from TopBar
  const [messageFromTopBar, setMessageFromTopBar] = useState(null);

  // Function to receive the message from TopBar and set it in state
  const receiveMessageFromTopBar = (message) => {
    setMessageFromTopBar(message);
  };
  return (
    <>
      <div id="pageWrapper" className="video-background">
        <video muted autoPlay loop>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <TopBar sendMessageToMainContainer={receiveMessageFromTopBar} />
        <main id="main-container">
          <MainContainer messageFromTopBar={messageFromTopBar} />
        </main>
      </div>
    </>
  );
};

export default App;
