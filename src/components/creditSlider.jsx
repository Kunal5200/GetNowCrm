import React from "react";
import { Carousel } from "react-responsive-carousel";
import CreditSlide from "./creditSlide1";
const CreditSlider = () => {
  return (
    <div>
      <Carousel className="creditSlider_carousel">
        <CreditSlide />
      </Carousel>
    </div>
  );
};

export default CreditSlider;
