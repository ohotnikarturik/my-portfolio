import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "@farbenmeer/react-spring-slider";

import CarouselItem from "../CarouselItem";

const Carousel = ({ state }) => {
  const [isAutoSlide, setIsAutoSlide] = useState(5000);
  
  const onHoverSlideMove = () => {
    setIsAutoSlide(0)
  }
  
  const onHoverOutSlideMove = () => {
    setIsAutoSlide(5000)
  }
  
  return (
    <Slider
      auto={isAutoSlide}
      hasBullets
      bulletStyle={{ backgroundColor: "#278ad5" }}
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
        />
      ))}
    </Slider>
  );
};

Carousel.propTypes = {
  state: PropTypes.object.isRequired,
};

export default Carousel;
