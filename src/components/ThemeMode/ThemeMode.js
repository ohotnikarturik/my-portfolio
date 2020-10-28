import React from "react";

import style from "./ThemeMode.module.scss";
import sprite from "../../assets/img/sprite.svg";

const ThemeMode = () => {
  return (
    <a
      className={style.link}
      href="#"
      aria-label="toggle button for theme of page"
    >
      <svg className={style.img}>
        <use href={`${sprite}#sun`} />
      </svg>
    </a>
  );
};

export default ThemeMode;
