import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "./ArrowRight.module.scss";
import sprite from "../../assets/img/sprite.svg";

const ArrowRight = ({ ariaLabel, linkTo }) => {
  return (
    <Link
      to={`${linkTo}`}
      className={style.link}
      aria-label={ariaLabel}
    >
      <svg className={style.arrowRight}>
        <use href={`${sprite}#arrow-right`} />
      </svg>
    </Link>
  );
};

ArrowRight.defaultProps = {
  ariaLabel: "some arial label",
};

ArrowRight.propTypes = {
  ariaLabel: PropTypes.string,
  linkTo: PropTypes.string,
};

export default ArrowRight;
