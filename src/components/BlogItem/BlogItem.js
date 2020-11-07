import React from "react";
import PropTypes from "prop-types";

import style from "./BlogItem.module.scss";
import SectionSubtitle from "../SectionSubtitle";
import ArrowRight from "../ArrowRight";
import Clock from "../Clock";
import imgBlogCard from "../../assets/img/content/blogs.svg";

const BlogItem = ({ descText, linkTo, page }) => {
  return (
    <li className={page === "allBlogs" ? style.item_wider : style.item}>
      <div className={style.itemContainer}>
        <div className={style.img}>
          <img src={imgBlogCard} className={style.imgPic} alt="img-blog" />
        </div>
        <div className={style.innerContent}>
          <div className={style.date}>
            <div className={style.datePic}>
              <Clock />
            </div>
            <div className={style.dateTitle}>
              <div className={style.datePic}>May 09, 2020</div>
            </div>
          </div>
          <div className={style.subtitle}>
            <SectionSubtitle subtitle={"Some Blog"} />
          </div>
          <div className={style.descText}>
            <p>{descText}</p>
            <p>{descText}</p>
          </div>
          <div className={style.btn}>
            <ArrowRight linkTo={linkTo} ariaLabel={"Link-button to read my blog"} />
          </div>
        </div>
      </div>
    </li>
  );
};

BlogItem.propTypes = {
  descText: PropTypes.string,
  linkTo: PropTypes.string,
  page: PropTypes.string,
};

export default BlogItem;
