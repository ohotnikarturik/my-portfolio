import React from "react";
import PropTypes from "prop-types";

import style from "./AllBlogsItem.module.scss";
import SectionSubtitle from "../SectionSubtitle";
import ArrowRight from "../ArrowRight";
import Clock from "../Clock";
import imgBlogsCard from "../../assets/img/content/blogs.svg";

const AllBlogsItem = ({ descText, linkTo }) => {
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
            <ArrowRight linkTo={linkTo} ariaLabel={"Link-button to read my blog"} />
          </div>
        </div>
      </div>
    </li>
  );
};

AllBlogsItem.propTypes = {
  descText: PropTypes.string,
  linkTo: PropTypes.string,
};

export default AllBlogsItem;
