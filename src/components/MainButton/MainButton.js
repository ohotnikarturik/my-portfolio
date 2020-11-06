import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "./MainButton.module.scss";

const MainButton = ({ label, type, classModifier, linkTo }) => (
  <Link
    to={`${linkTo}`}
    className={classModifier ? style.mainButton_reset : style.mainButton}
    role="button"
    type={type}
  >
    {label}
  </Link>
);

MainButton.defaultProps = {
  label: "Button",
  type: "button",
  classModifier: false,
};

MainButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  linkTo: PropTypes.string,
  classModifier: PropTypes.bool,
};

export default MainButton;
