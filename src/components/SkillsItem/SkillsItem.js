import React from "react";
import PropTypes from "prop-types";

import style from "./SkillsItem.module.scss";
import sprite from "../../assets/img/sprite.svg";
import SectionSubtitle from "../SectionSubtitle";
import ProgressPercent from "../ProgressPercent";

const SkillsItem = ({ ariaLabel, img, subtitle, href, completed }) => {
  return (
    <li className={style.item}>
      <a
        href={href}
        className={style.link}
        rel="noreferrer"
        target="_blank"
        aria-label={ariaLabel}
      >
        <div className={style.innerBlock}>
          <svg className={style.img}>
            <use href={`${sprite}#${img}`} />
          </svg>
          <SectionSubtitle subtitle={subtitle} classModifier />
          <ProgressPercent completed={completed} />
        </div>
      </a>
    </li>
  );
};

SkillsItem.propTypes = {
  ariaLabel: PropTypes.string,
  img: PropTypes.string,
  subtitle: PropTypes.string,
  href: PropTypes.string,
  completed: PropTypes.number,
};

export default SkillsItem;
