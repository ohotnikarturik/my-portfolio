import React from "react";
import PropTypes from "prop-types";

import style from "./WaveShape.module.scss";
import sprite from "../../assets/img/sprite.svg";

const WaveShape = ({ styles }) => {
  return (
    <svg className={style.wave} style={{...styles}}>
      <use href={sprite + "#wave"} />
    </svg>
  );
};

WaveShape.propTypes = {
  styles: PropTypes.object,
};

export default WaveShape;
