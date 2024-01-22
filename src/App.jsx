import React from "react";
import "./index.css";
import "./css/pageStyles.css";
import bgVideo from "./images/bgv.mp4";

import TopBar from "./components/TopBar";
import MainContainer from "./components/Section_components/MainContainer";
import { useState } from "react";

const App = () => {
  // Stores the message received from the `TopBar` component.
  const [btnIdFromTopBar, setBtnIdFromTopBar] = useState(null);

  // Handles incoming messages from the `TopBar` component and updates the corresponding state.
  const receiveBtnIdFromTopBar = (buttonId) => {
    setBtnIdFromTopBar(buttonId);
  };
  return (
    <>
      <div id="pageWrapper" className="video-background">
        <video muted autoPlay loop>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <TopBar sendBtnIdToMainContainer={receiveBtnIdFromTopBar} />
        <main id="main-container">
          <MainContainer navBtn={btnIdFromTopBar} />
        </main>
      </div>
    </>
  );
};

export default App;
