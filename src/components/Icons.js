import React from "react";
import homeHygiene from "../front-end-dev-test-assets/home-hygiene.svg";
import homeExpertise from "../front-end-dev-test-assets/home-expertise.svg";
import homeLab from "../front-end-dev-test-assets/home-lab.svg";
import homeRetention from "../front-end-dev-test-assets/home-retention.svg";

const Icons = () => {
  return (
    <div className="iconsContainer">
      <div className="iconBorder homeIcons1">
        <img
          src={homeExpertise}
          alt="homeExpertise Logo"
          className="homeIcons"
        ></img>{" "}
      </div>
      <div className="iconBorder homeIcons2">
        <img
          src={homeHygiene}
          alt="homeHygiene Logo"
          className="homeIcons"
        ></img>{" "}
      </div>
      <div className="iconBorder homeIcons3">
        <img src={homeLab} alt="homeLab Logo" className="homeIcons"></img>{" "}
      </div>
      <div className="iconBorder homeIcons4">
        <img
          src={homeRetention}
          alt="homeRetention Logo"
          className="homeIcons"
        ></img>
      </div>
    </div>
  );
};

export default Icons;
