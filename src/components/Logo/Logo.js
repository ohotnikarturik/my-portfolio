import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

import style from "./Logo.module.scss";

const Logo = ({ label, classModifier, classModifierText }) => {
  return (
    <Link
      to={"Home"}
      smooth={true}
      duration={500}
      className={classModifier ? style.logo_color_white : style.logo}
    >
      <span className={classModifierText ? style.text_color_red : style.text}>
        {label}
      </span>
    </Link>
  );
};

Logo.defaultProps = {
  label: "Artur.",
  classModifier: false,
  classModifierText: false,
};

Logo.propTypes = {
  label: PropTypes.string,
  classModifier: PropTypes.bool,
  classModifierText: PropTypes.bool,
};

export default Logo;
