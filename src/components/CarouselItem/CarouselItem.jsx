import React from "react";
import PropTypes from "prop-types";

import style from "./CarouselItem.module.scss";
import SectionSubtitle from "../SectionSubtitle";
import SocialsItem from "../SocialsItem";

const CarouselItem = ({ img, subtitle, descText1, descText2, socials, onHoverSlideMove, onHoverOutSlideMove }) => {
  const imageStyle = (src) => ({
    backgroundImage: `url(${src})`,
  });

  return (
    <div onMouseOver={onHoverSlideMove} onMouseOut={onHoverOutSlideMove} className={style.itemContainer}>
      <div className={style.workImg} style={imageStyle(img)} />
      <div className={style.descContainer}>
        <SectionSubtitle subtitle={subtitle} />
        <div className={style.descText}>{descText1}</div>
        <div className={style.descText}>{descText2}</div>
        <ul className={style.socialsContainer}>
          {socials.map((icon) => (
            <SocialsItem
              key={icon.id}
              img={icon.img}
              link={icon.link}
              ariaLabel={icon.ariaLabel}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  img: PropTypes.string,
  subtitle: PropTypes.string,
  descText1: PropTypes.string,
  descText2: PropTypes.string,
  link: PropTypes.string,
  linkGithub: PropTypes.string,
  socials: PropTypes.array,
  onHoverSlideMove: PropTypes.func,
  onHoverOutSlideMove: PropTypes.func,
};

export default CarouselItem;
