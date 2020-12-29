import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "@farbenmeer/react-spring-slider";

import CarouselItem from "../CarouselItem";

const Carousel = ({ state }) => {
  const [autoSlide, setAutoSlide] = useState(5000);

  const onHoverSlideMove = () => {
    setAutoSlide(0);
  };

  const onHoverOutSlideMove = () => {
    setAutoSlide(5000);
  };

  return (
    <Slider
      auto={autoSlide}
      hasArrows
      hasBullets
      bulletStyle={{ backgroundColor: "#278ad5", border: "1px solid #fff" }}
      arrowStyle={{ borderColor: "#278ad5" }}
    >
      {state.works.map((work) => (
        <CarouselItem
          key={work.id}
          onHoverSlideMove={onHoverSlideMove}
          onHoverOutSlideMove={onHoverOutSlideMove}
          img={work.img}
          subtitle={work.subtitle}
          descText1={work.descText1}
          descText2={work.descText2}
          socials={work.socials}
          socialName={work.socialName}
        />
      ))}
    </Slider>
  );
};

Carousel.propTypes = {
  state: PropTypes.object.isRequired,
};

export default Carousel;
