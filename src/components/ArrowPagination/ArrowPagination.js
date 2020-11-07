import React from "react";
import PropTypes from "prop-types";

import style from "./ArrowPagination.module.scss";
import sprite from "../../assets/img/sprite.svg";

const ArrowPagination = ({ arrowLeft }) => {
  return (
    <a href="#" className={style.paginationArrow}>
      <svg
        className={
          arrowLeft ? style.arrowLeftPagination : style.arrowRightPagination
        }
      >
        <use href={`${sprite}#arrow-right`} />
      </svg>
    </a>
  );
};

ArrowPagination.propTypes = {
  clazz: PropTypes.string,
  arrowLeft: PropTypes.bool,
};

export default ArrowPagination;
