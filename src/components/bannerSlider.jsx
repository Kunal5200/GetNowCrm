import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "./slider1";
import Slider2 from "./slider2";
const BannerSlider = () => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 80,
    height: 40,
    cursor: "pointer",
    borderRadius: 20,
  };
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        showArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
            >
              -
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: -14 }}
            >
              +
            </button>
          )
        }
      >
        <Slider1 />
        <Slider2 />
      </Carousel>
    </div>
  );
};

export default BannerSlider;
