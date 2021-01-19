import React from "react";
import PropTypes from "prop-types";

import style from "./ParallaxSection.module.scss";
import WaveShape from "../../WaveShape";
import TriangleShape from "../../TriangleShape";

const ParallaxSection = ({ state, middlSectionImg }) => {
  const [img1, img2] = state.parallaxSectionImg;

  const bgImgStyle = (bgImg) => ({
    backgroundImage: `url(${bgImg})`,
  });
  return (
    <section
      style={middlSectionImg ? bgImgStyle(img1.img) : bgImgStyle(img2.img)}
      className={style.parallax}
    >
      {middlSectionImg ? (
        <>
          <WaveShape styles={{ top: "-2" }} />
          <WaveShape
            styles={{
              bottom: "-2",
              transform: "rotate(180deg)",
              fill: "#f4f4f4",
            }}
          />
        </>
      ) : (
        <>
          <TriangleShape styles={{ top: "-2" }} />
          <TriangleShape
            styles={{
              bottom: "-2",
              transform: "rotate(180deg)",
              fill: "#2f2e41",
            }}
          />
        </>
      )}
    </section>
  );
};

ParallaxSection.propTypes = {
  state: PropTypes.object.isRequired,
  middlSectionImg: PropTypes.bool,
};

export default ParallaxSection;
