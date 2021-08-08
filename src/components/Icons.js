import React from "react";
import homeHygiene from "../front-end-dev-test-assets/home-hygiene.svg";
import homeExpertise from "../front-end-dev-test-assets/home-expertise.svg";
import homeLab from "../front-end-dev-test-assets/home-lab.svg";
import homeRetention from "../front-end-dev-test-assets/home-retention.svg";

const Icons = () => {
  return (
    <div className="iconsContainer">
      <img
        src={homeExpertise}
        alt="homeExpertise Logo"
        className="homeIcons homeIcons1"
      ></img>{" "}
      <img
        src={homeHygiene}
        alt="homeHygiene Logo"
        className="homeIcons homeIcons2"
      ></img>{" "}
      <img
        src={homeLab}
        alt="homeLab Logo"
        className="homeIcons homeIcons3"
      ></img>{" "}
      <img
        src={homeRetention}
        alt="homeRetention Logo"
        className="homeIcons homeIcons4"
      ></img>
    </div>
  );
};

export default Icons;
