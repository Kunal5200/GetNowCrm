import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "./slider1";
import Slider2 from "./slider2";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
const BannerSlider = () => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 80,
    height: 50,
    cursor: "pointer",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    backgroundColor: "#0083ff",
    color: "#fff",
  };
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        infiniteLoop={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: -20 }}
            >
              <ChevronLeft sx={{ fontSize: 40 }} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: -20 }}
            >
              <ChevronRight sx={{ fontSize: 40 }} />
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
