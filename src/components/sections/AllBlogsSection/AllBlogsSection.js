import React from "react";
import PropTypes from "prop-types";

import style from "./AllBlogsSection.module.scss";
import PaginationItem from "../../PaginationItem";
import SectionTitle from "../../SectionTitle";
import ArrowPagination from "../../ArrowPagination";
import AllBlogsItem from "../../AllBlogsItem";

const AllBlogsSection = ({ state }) => {
  return (
    <section className={style.allBlogs} title="All Blogs">
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"All Blogs."} />
        </div>
        <div className={style.content}>
          <div className={style.paginationTop}>
            <ArrowPagination />
            <ul className={style.paginationList}>
              {state.pagination.map((i) => (
                <PaginationItem key={i.id} id={i.id} />
              ))}
            </ul>
            <ArrowPagination />
          </div>
          <ul className={style.list}>
            {state.allBlogs.map((item) => (
              <AllBlogsItem linkTo={item.linkTo} key={item.id} descText={item.descText} />
            ))}
          </ul>
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

AllBlogsSection.propTypes = {
  state: PropTypes.object.isRequired,
};

export default AllBlogsSection;
