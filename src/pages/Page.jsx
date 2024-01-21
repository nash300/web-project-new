import "../components/Buttons";
import HomeDisplay from "./../components/Home";
import { letsBegin } from "../components/Buttons";

const HomePage = () => {
  return (
    <>
      <div id="button-section">
        <div id="button-container"> {letsBegin} </div>
      </div>
      <div id="display-section">
        <div id="display-container"> {HomeDisplay} </div>
      </div>
    </>
  );
};

export default HomePage;
