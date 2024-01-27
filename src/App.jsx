import React from "react";
import "./index.css";
import "./css/pageStyles.css";
import "./css/mediaQueriesMobile.css";
import "./css/mediaQueriesTablet.css";
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
