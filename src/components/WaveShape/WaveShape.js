import React from "react";
import PropTypes from "prop-types";

import style from "./WaveShape.module.scss";
import sprite from "../../assets/img/sprite.svg";

const WaveShape = ({ color }) => {
  return (
    <svg className={style.wave} style={{fill: `${color}`}}>
      <use href={sprite + "#wave"} />
    </svg>
  );
};

WaveShape.propTypes = {
  color: PropTypes.string,
};

export default WaveShape;
