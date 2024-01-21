import React from "react";

const Header = () => {
  return (
    <>
      <header className="TopBar">
        <aside id="logo-section">
          <img
            src="./src/images/logo.png"
            alt="the logo"
            onClick={() => {
              masterReset();
            }}
          />
        </aside>
        <aside className="NavSection">
          <nav id="navigation-bar">
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    masterReset();
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setDisplayToFeatures();
                    resetButtonOutput();
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setDisplayToDataPolicy();
                    resetButtonOutput();
                  }}
                >
                  Data policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setDisplayToAbout();
                    resetButtonOutput();
                  }}
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </header>
    </>
  );
};

export default Header;
