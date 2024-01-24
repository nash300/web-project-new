import React from "react";
import "./index.css";
import "./css/pageStyles.css";
import bgVideo from "./images/bgv.mp4";

import TopBar from "./components/TopBar";
import ButtonSection from "./components/Section_components/ButtonSection";
import DisplaySection from "./components/Section_components/DisplaySection";

const App = () => {
  return (
    <>
      <div id="pageWrapper" className="video-background">
        <video muted autoPlay loop>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <TopBar />
        <main id="main-container">
          <ButtonSection />
          <DisplaySection />
        </main>
      </div>
    </>
  );
};

export default App;
