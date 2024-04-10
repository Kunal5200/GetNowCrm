import React from "react";
import { Carousel } from "react-responsive-carousel";
import CreditSlide from "./creditSlide1";
import { data } from "@/assessts/data";
const CreditSlider = () => {
  return (
    <div>
      <Carousel className="creditSlider_carousel">
        {data.credit.map((val, i) => (
          <CreditSlide
            img={val.img}
            title={val.title}
            heading={val.heading}
            bgColor={val.bgColor}
            description={val.description}
            titleColor={val.titleColor}
            className={val.className}
            headingColor={val.titleColor}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CreditSlider;
