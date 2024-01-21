import React from "react";
import "./index.css";
import "./css/pageStyles.css";
import bgVideo from "./images/bgv.mp4";

import ButtonSection from "./button_section_components/buttonSection";
import DisplaySection from "./display_section_components/DisplaySection";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <>
      <div id="pageWrapper" className="video-background">
        <video muted autoPlay loop>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <TopBar />
        <main id="main-container">
          <div id="button-section">
            <ButtonSection />
          </div>
          <div id="display-section">
            <DisplaySection />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
