import React from "react";

import style from "./Clock.module.scss";
import sprite from "../../assets/img/sprite.svg";

const Clock = () => {
  return (
    <svg className={style.clock}>
      <use href={`${sprite}#clock`} />
    </svg>
  );
};

export default Clock;
