import React from "react";

import style from "./ArrowDown.module.scss";
import sprite from "../../assets/img/sprite.svg";

const ArrowDown = () => {
  return (
      <a href="#" className={style.arrowDownLink} aria-label="Link to next bottom section">
        <svg className={style.arrow}>
          <use href={`${sprite}#arrow`} />
        </svg>
      </a>
  );
};

export default ArrowDown;
