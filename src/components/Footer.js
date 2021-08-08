import React from "react";
import facebook from "../front-end-dev-test-assets/facebook.svg";
import instagram from "../front-end-dev-test-assets/instagram.svg";

const Footer = () => {
  return (
    <nav className="footerNavBar">
      <div className="socialLinksFooter">
        <p>Follow Us</p>
        <a
          href="https://www.facebook.com/RoosterGrin/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={facebook}
            alt="Facebook Logo"
            className="socialImages"
          ></img>
        </a>
        <a
          href="https://www.instagram.com/geddydukes/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={instagram}
            alt="instagram Logo"
            className="socialImages"
          ></img>
        </a>
      </div>
    </nav>
  );
};

export default Footer;
