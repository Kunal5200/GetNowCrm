import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "./slider1";
const BannerSlider = () => {
  return (
    <div>
      <Carousel>
        <Slider1 />
      </Carousel>
    </div>
  );
};

export default BannerSlider;
