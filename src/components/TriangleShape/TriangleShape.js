import React from "react";
import PropTypes from "prop-types";

import style from "./TriangleShape.module.scss";
import sprite from "../../assets/img/sprite.svg";

const TriangleShape = ({ color }) => {
  return (
    <svg className={style.polygon} style={{fill: `${color}`}}>
      <use href={sprite + "#polygon"} />
    </svg>
  );
};

TriangleShape.propTypes = {
  color: PropTypes.string,
};

export default TriangleShape;
