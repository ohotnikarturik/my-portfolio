import React from "react";
import PropTypes from "prop-types";

import style from "./SingleBlogSection.module.scss";
import SectionTitle from "../../SectionTitle";
import Clock from "../../Clock";
import SectionSubtitle from "../../SectionSubtitle";
import singleBlogImg from "../../../assets/img/content/blogs.svg"
import ArrowPagination from "../../ArrowPagination";
import PaginationItem from "../../PaginationItem";
import SingleBlogItem from "../../SingleBlogItem";

const SingleBlogSection = ({ state }) => {
  return (
    <section className={style.singleBlog} title="All Blogs">
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"Blog."} />
        </div>
        <div className={style.content}>
          <div className={style.innerContent}>
            <div className={style.date}>
              <div className={style.datePic}>
                <Clock />
              </div>
              <div className={style.dateTitle}>
                <div className={style.date}>May 09, 2020</div>
              </div>
            </div>
            <div className={style.subtitle}>
              <SectionSubtitle subtitle={"Some Blog"} />
            </div>
          </div>
          <ul className={style.list}>
            <li className={style.item}>
              <div className={style.itemContainer}>
                <div className={style.img}>
                  <img src={singleBlogImg} className={style.imgPic} alt="img-blog" />
                </div>
              </div>
            </li>
          </ul>
          <div className={style.desc}>
            <ul className={style.descList}>
              {state.blogText.map(i => <SingleBlogItem key={i.id} text={i.text} />)}
            </ul>
          </div>
          <div className={style.paginationBottom}>
            <ArrowPagination />
            <ul className={style.paginationList}>
              {state.pagination.map((i) => (
                  <PaginationItem key={i.id} id={i.id} />
              ))}
            </ul>
            <ArrowPagination />
          </div>
        </div>
      </div>
    </section>
  );
};

SingleBlogSection.propTypes = {
  state: PropTypes.object.isRequired,
};

export default SingleBlogSection;
