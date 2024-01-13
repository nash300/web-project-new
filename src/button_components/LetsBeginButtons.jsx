import { useHandleActions } from "../hooks/useMyHooks";
import IwantToButtons from "./IwantToButtons";
import HomeDisplay from "../display_components/HomeDisplay";

const LetsBeginButtons = () => {
  const { pageHandler } = useHandleActions();

  const handleClick = () => {
    pageHandler(<IwantToButtons />, <HomeDisplay />);
  };

  return (
    <>
      <button id="letsBegin" onClick={() => handleClick()}>
        Let's Begin!
      </button>
    </>
  );
};

export default LetsBeginButtons;
