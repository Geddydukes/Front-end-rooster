import React from "react";
import Carosel from "./Carosel";
import Icons from "./Icons";

const Body = () => {
  return (
    <div className="wholeBody">
      <div className="bodySection bodySectionOne">
        <div className="bodySectionOneText">
          <header className="bodyHeaderOne">LOREM IPSUM</header>
          <p>
            {" "}
            Dolor sit amet consectetur adipisicing elit. Animi facilis
            consequatur veritatis deserunt temporibus non ducimus officiis
            repudiandae? Quisquam adipisci.
          </p>
          <a
            href="https://www.roostergrin.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            {">"} Lorem Ipsum
          </a>
        </div>
        <div className="bodySectionOneImage"></div>
      </div>
      <div className="bodySection bodySectionTwo">
        <div className="bodySectionTwoText">
          <header className="bodyHeaderOne">LOREM IPSUM</header>{" "}
          <button className="bodyButton">Button Button</button>
        </div>
      </div>
      <div className="bodySection bodySectionThree">
        <div className="bodySectionThreeText">
          <header className="bodyHeaderTwo">LOREM IPSUM DOLAR SIT AMET</header>{" "}
          <p>
            {" "}
            consectetur adipisicing elit. Quisquam adipisci quos tenetur
            recusandae quis fugiat exercitationem autem nesciunt odit labore
            velit voluptatem, voluptates id fuga ratione cum.{" "}
          </p>
          <a
            href="https://www.roostergrin.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            {">"} Lorem Ipsum
          </a>
        </div>
        <Icons />
      </div>
      <div className="bodySection bodySectionFour">
        <div className="bodySectionFourText">
          <header>LOREM IPSUM</header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In numquam
            mollitia atque consequatur vero. Quo, minus tempora in porro illo
            inventore,{" "}
          </p>
          <button className="bodyButton">Button Button</button>
        </div>
      </div>
      <div className="bodySection bodySectionFive">
        {" "}
        <div className="bodySectionFiveText">
          <header className="bodyHeaderThree">
            LOREM IPSUM DOLAR SIT AMET
          </header>
          <span className="fiveStars">★★★★★</span>
        </div>
        <Carosel />
      </div>
    </div>
  );
};

export default Body;
