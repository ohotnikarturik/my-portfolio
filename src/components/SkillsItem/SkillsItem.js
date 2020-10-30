import React from "react";
import PropTypes from "prop-types";

import style from "./SkillsItem.module.scss";
import sprite from "../../assets/img/sprite.svg";
import SectionSubtitle from "../SectionSubtitle";

const SkillsItem = ({ ariaLabel, img, subtitle, href }) => {
  return (
    <li className={style.item}>
      <div className={style.innerBlock}>
        <a
          href={href}
          className={style.link}
          rel="noreferrer"
          target="_blank"
          aria-label={ariaLabel}
        >
          <svg className={style.img}>
            <use href={`${sprite}#${img}`} />
          </svg>
          <SectionSubtitle subtitle={subtitle} classModifier />
        </a>
      </div>
    </li>
  );
};

SkillsItem.propTypes = {
  ariaLabel: PropTypes.string,
  img: PropTypes.string,
  subtitle: PropTypes.string,
  href: PropTypes.string,
};

export default SkillsItem;
