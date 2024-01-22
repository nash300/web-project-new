const TopBar = ({ sendMessageToMainContainer }) => {
  const handleButtonClick = () => {
    // Send the message to MainContainer
    sendMessageToMainContainer("Hi from topbar");
  };
  return (
    <>
      <header className="TopBar">
        <aside id="logo-section">
          <img src="./src/images/logo.png" alt="the logo" />
        </aside>
        <aside className="NavSection">
          <nav id="navigation-bar">
            <ul>
              <li>
                <a href="#" onClick={handleButtonClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Data policy</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
        </aside>
      </header>
    </>
  );
};

export default TopBar;
