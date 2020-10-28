import React from "react";
import PropTypes from "prop-types";

import style from "./WorksItem.module.scss";
import SectionSubtitle from "../SectionSubtitle";
import ArrowRight from "../ArrowRight";

const WorksItem = ({ subtitle, descText }) => {
  return (
    <li className={style.item}>
      <div className={style.itemContainer}>
        <div className={style.subtitle}>
          <SectionSubtitle subtitle={subtitle} />
        </div>
        <div className={style.descText}>
          <p>{descText}</p>
          <p>{descText}</p>
        </div>
        <div className={style.btn}>
          <ArrowRight ariaLabel={"Link-button to view my work"} />
        </div>
      </div>
    </li>
  );
};

WorksItem.propTypes = {
  subtitle: PropTypes.string,
  descText: PropTypes.string,
};

export default WorksItem;
