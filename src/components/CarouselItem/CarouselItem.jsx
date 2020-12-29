import React from "react";
import PropTypes from "prop-types";

import style from "./CarouselItem.module.scss";
import SectionSubtitle from "../SectionSubtitle";
import SocialsItem from "../SocialsItem";

const CarouselItem = ({ img, subtitle, descText1, descText2, socials }) => {
  const imageStyle = (src) => ({
    backgroundImage: `url(${src})`,
  });

  return (
    <div className={style.itemContainer}>
      <div className={style.descContainer}>
        <SectionSubtitle subtitle={subtitle} />
        <ul className={style.socialsContainer}>
          {socials.map((icon) => (
            <SocialsItem
              key={icon.id}
              img={icon.img}
              link={icon.link}
              ariaLabel={icon.ariaLabel}
              socialName={icon.socialName}
            />
          ))}
        </ul>
        <div className={style.descText1}>{descText1}</div>
        <div className={style.descText2}>{descText2}</div>
      </div>
      <div className={style.workImg} style={imageStyle(img)} />
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
  socialName: PropTypes.string,
  socials: PropTypes.array,
};

export default CarouselItem;
