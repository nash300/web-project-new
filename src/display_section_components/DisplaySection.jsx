import { useEffect } from "react";

const DisplaySection = ({ displayOutput }) => {
  useEffect(() => {
    console.log("Display COMPONENT updated");
  }, [displayOutput]);

  return <div id="displayContainer">{displayOutput}</div>;
};

export default DisplaySection;
