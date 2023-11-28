import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll,direction }) => {
  const numSlides = window.innerWidth <= 768 ? 2 : slidesToShow;
  const val = direction === "left" ? -2 : 2;
  return (
    <div className="slide">
      <div className="container">
        <Slider autoplay={true} autoplaySpeed={2000} autoplayScroll={val}  slidesToShow={numSlides} arrowsScroll={arrowsScroll} adaptiveHeight={true}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
