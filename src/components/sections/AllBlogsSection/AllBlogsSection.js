import React from "react";
import PropTypes from "prop-types";

import style from "./AllBlogsSection.module.scss";
import PaginationItem from "../../PaginationItem";
import SectionTitle from "../../SectionTitle";
import ArrowPagination from "../../ArrowPagination";
import BlogsItem from "../../BlogItem";

const AllBlogsSection = ({ state, page }) => {
  return (
    <section className={style.allBlogs} title="All Blogs">
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"All Blogs."} />
        </div>
        <div className={style.content}>
          <div className={style.paginationTop}>
            <ul className={style.paginationList}>
              {state.pagination.map((i) => (
                <PaginationItem key={i.id} id={i.id} />
              ))}
            </ul>
            <ArrowPagination />
          </div>
          <ul className={style.list}>
            {state.allBlogs.map((item) => (
              <BlogsItem page={page} linkTo={item.linkTo} key={item.id} descText={item.descText} />
            ))}
          </ul>
          <div className={style.paginationBottom}>
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

AllBlogsSection.propTypes = {
  state: PropTypes.object.isRequired,
  page: PropTypes.string,
};

export default AllBlogsSection;
