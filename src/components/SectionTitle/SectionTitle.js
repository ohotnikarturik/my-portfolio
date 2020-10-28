import React from "react";
import PropTypes from "prop-types";

import style from "./SectionTitle.module.scss";

const SectionTitle = ({ title, classModifier }) => (
  <h2
    className={
      classModifier ? style.sectionTitle_color_white : style.sectionTitle
    }
  >
    {title}
  </h2>
);

SectionTitle.defaultProps = {
  title: "Section Title.",
  classModifier: false,
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  classModifier: PropTypes.bool,
};

export default SectionTitle;
