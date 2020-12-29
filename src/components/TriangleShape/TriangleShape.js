import React from "react";
import PropTypes from "prop-types";

import style from "./TriangleShape.module.scss";
import sprite from "../../assets/img/sprite.svg";

const TriangleShape = ({ styles }) => {
  return (
    <svg className={style.polygon} style={{...styles}}>
      <use href={sprite + "#polygon"} />
    </svg>
  );
};

TriangleShape.propTypes = {
  styles: PropTypes.object,
};

export default TriangleShape;
