import React from "react";
import PropTypes from "prop-types";

import style from "./ArrowRight.module.scss";
import sprite from "../../assets/img/sprite.svg";

const ArrowRight = ({ariaLabel}) => {
  return (
    <a
      href="#"
      className={style.link}
      target="_blank"
      aria-label={ariaLabel}
    >
      <svg className={style.arrowRight}>
        <use href={`${sprite}#arrow-right`} />
      </svg>
    </a>
  );
};

ArrowRight.defaultProps = {
  ariaLabel: "some arial label"
};

ArrowRight.propTypes = {
  ariaLabel: PropTypes.string,
};

export default ArrowRight;
