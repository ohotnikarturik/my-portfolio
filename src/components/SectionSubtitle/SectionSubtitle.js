import React from "react";
import PropTypes from "prop-types";

import style from "./SectionSubtitle.module.scss";

const SectionSubtitle = ({ subtitle, classModifier }) => (
  <h3
    className={
      classModifier ? style.sectionSubtitle_color_white : style.sectionSubtitle
    }
  >
    {subtitle}
  </h3>
);

SectionSubtitle.defaultProps = {
  classModifier: false
  
};

SectionSubtitle.propTypes = {
  subtitle: PropTypes.string,
  classModifier: PropTypes.bool,
  
};

export default SectionSubtitle;
