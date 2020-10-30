import React from "react";
import { Link } from "react-scroll";

import style from "./ArrowDown.module.scss";
import sprite from "../../assets/img/sprite.svg";

const ArrowDown = () => {
  return (
    <Link
      to={"Works"}
      smooth={true}
      duration={500}
      className={style.arrowDownLink}
      aria-label="Link to next bottom section"
    >
      <svg className={style.arrow}>
        <use href={`${sprite}#arrow`} />
      </svg>
    </Link>
  );
};

export default ArrowDown;
