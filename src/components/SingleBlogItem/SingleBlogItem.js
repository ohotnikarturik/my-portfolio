import React from "react";
import PropTypes from "prop-types";

import style from "./SingleBlogItem.module.scss";
import SectionSubtitle from "../SectionSubtitle";

const SingleBlogItem = ({ text, blogTitle }) => {
  return (
    <li className={style.descItem}>
      <div className={style.descContainer}>
        <div className={style.descTitle}>
          <SectionSubtitle subtitle={blogTitle} />
        </div>
        <div className={style.descText}>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
        </div>
      </div>
    </li>
  );
};

SingleBlogItem.propTypes = {
  text: PropTypes.string,
  blogTitle: PropTypes.string,
};

export default SingleBlogItem;
