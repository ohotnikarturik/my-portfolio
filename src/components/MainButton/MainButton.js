import React from "react";
import PropTypes from "prop-types";

import style from "./MainButton.module.scss";

const MainButton = ({ label, type, classModifier }) => (
  <a
    href="#"
    className={classModifier ? style.mainButton_reset : style.mainButton }
    role="button"
    type={type}
  >
    {label}
  </a>
);

MainButton.defaultProps = {
  label: "Button",
  type: "button",
  classModifier: false,
};

MainButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  classModifier: PropTypes.bool,
};

export default MainButton;
