import React from "react";
import PropTypes from "prop-types";
import Slider from "@farbenmeer/react-spring-slider";

import CarouselItem from "../CarouselItem";

const Carousel = ({ state }) => {
  return (
    <Slider
      hasArrows
      hasBullets
      bulletStyle={{ backgroundColor: "#278ad5", border: "1px solid #fff" }}
      arrowStyle={{ borderColor: "#278ad5" }}
    >
      {state.works.map((work) => (
        <CarouselItem
          key={work.id}
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
