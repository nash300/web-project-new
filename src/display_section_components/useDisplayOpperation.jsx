import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import DataPolicy from "./pages/DataPolicy";
import { useEffect, useState } from "react";

export const useDisplayOpperation = () => {
  //
  //-----------------------------------------------------------
  const [displayOutput, setDisplayOutput] = useState(Home);

  useEffect(() => {
    console.log("display changed in HOOK");
  }, [displayOutput]);
  //-----------------------------------------------------------
  //
  //
  const setDisplayToHome = () => {
    setDisplayOutput(Home);
  };

  const setDisplayToFeatures = () => {
    setDisplayOutput(Features);
  };

  const setDisplayToAbout = () => {
    setDisplayOutput(About);
  };

  const setDisplayToDataPolicy = () => {
    setDisplayOutput(DataPolicy);
  };
  //

  return {
    displayOutput,
    setDisplayToHome,
    setDisplayToFeatures,
    setDisplayToAbout,
    setDisplayToDataPolicy,
  };
};
