import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "./MainButton.module.scss";

const MainButton = ({ label, type, linkTo, isDisabled, onReset }) => {
  return type === "submit" || type === "reset" ? (
    <button
      className={
        type === "reset"
          ? (!isDisabled
            ? style.mainButton_reset_disabled
            : style.mainButton_reset)
          : (!isDisabled ? style.mainButton_disabled : style.mainButton)
      }
      role="button"
      type={type}
      disabled={!isDisabled}
      onClick={onReset}
    >
      {label}
    </button>
  ) : (
    <Link
      to={`${linkTo}`}
      className={style.mainButton}
      role="button"
      type={type}
    >
      {label}
    </Link>
  );
};

MainButton.defaultProps = {
  label: "Button",
  type: "button",
};

MainButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  linkTo: PropTypes.string,
  isDisabled: PropTypes.bool,
  onReset: PropTypes.func,
};

export default MainButton;
