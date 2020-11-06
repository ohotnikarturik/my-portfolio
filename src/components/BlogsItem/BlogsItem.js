import React from "react";
import PropTypes from "prop-types";

import style from "./BlogsItem.module.scss";
import SectionSubtitle from "../SectionSubtitle";
import ArrowRight from "../ArrowRight";
import Clock from "../Clock";
import imgBlogsCard from "../../assets/img/content/blogs.svg";

const BlogsItem = ({ descText }) => {
  return (
    <li className={style.item}>
      <div className={style.itemContainer}>
        <div className={style.img}>
          <img src={imgBlogsCard} className={style.imgPic} alt="img-blog" />
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
            <ArrowRight linkTo="blog" ariaLabel={"Link-button to read my blog"} />
          </div>
        </div>
      </div>
    </li>
  );
};

BlogsItem.propTypes = {
  descText: PropTypes.string,
};

export default BlogsItem;
