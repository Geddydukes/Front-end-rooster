import React from "react";
import logo from "../front-end-dev-test-assets/logo-white.svg";

const Header = () => {
  return (
    <div className="heroContainer">
      <div className="heroImage">
        <header className="heroHeader">
          {" "}
          <a href="https://www.roostergrin.com" target="blank">
            <img
              src={logo}
              alt="logo-white Logo"
              className="socialImages"
            ></img>
          </a>
        </header>
        <div className="heroTextContainer">
          <p className="heroWelcome">Welcome To</p>
          <p className="heroText">Rooster Grin</p>
          <button className="heroButton">Button Button</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
