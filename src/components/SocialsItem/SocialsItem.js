import React from "react";
import PropTypes from "prop-types";

import style from "./SocialsItem.module.scss";
import sprite from "../../assets/img/sprite.svg";

const SocialsItem = ({ ariaLabel, img, link }) => {
  return (
    <li className={style.item}>
      <a href={link} className={style.link} rel="noreferrer" target="_blank" aria-label={ariaLabel}>
        <svg className={style.img}>
          <use href={`${sprite}#${img}`} />
        </svg>
      </a>
    </li>
  );
};

SocialsItem.propTypes = {
  ariaLabel: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
};

export default SocialsItem;
