import React from "react";
import carouselData from "../config/CarouselData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carosel = () => {
  let data = carouselData;
  let ourReviews = [];

  data.forEach((data) => {
    let review = (
      <p className="theReview">
        {" "}
        <bold>
          {data.name} | | {data.date}
        </bold>
        <br></br>
        <br></br>
        {data.review}
      </p>
    );
    ourReviews.push(review);
  });
  return (
    <div className="caroselContainer">
      <Carousel>{ourReviews}</Carousel>
    </div>
  );
};

export default Carosel;
