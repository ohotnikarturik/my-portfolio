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
          <WaveShape styles={{ top: "-3" }} />
        </>
      ) : (
        <>
          <TriangleShape styles={{ top: "-3" }} />
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
