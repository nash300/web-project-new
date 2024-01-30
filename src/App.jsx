/* -The main layout is devided into 3 sections*/
/* 1.TopBarSection - Contains the logo and navigation menu list*/
/* 2. ButtonSection - Performs dialog flow by dynamicly creating buttons for each dialog mask */
/* 3. DisplaySection - Displays all results and outputs*/
/* -The global variables (ex: useStates) are defined as context.provider and stored in "context_files" folder */
/* -Settings for the background video is directly defines here*/
import React from "react";
import "./index.css";
import "./pageStyles.css";
import "./mediaQ/mediaQueriesMobile.css";
import "./mediaQ/mediaQueriesTablet.css";
import bgVideo from "./images/bgv.mp4";

import TopBarSection from "./components/Section_components/TopBarSection";
import ButtonSection from "./components/Section_components/ButtonSection";
import DisplaySection from "./components/Section_components/DisplaySection";

const App = () => {
  return (
    <>
      <video muted autoPlay loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <TopBarSection />
      <main id="main-container">
        <ButtonSection />
        <DisplaySection />
      </main>
    </>
  );
};

export default App;
