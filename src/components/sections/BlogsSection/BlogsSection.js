import React from "react";
import PropTypes from "prop-types";

import style from "./BlogsSection.module.scss";
import SectionTitle from "../../SectionTitle";
import MainButton from "../../MainButton";
import BlogsItem from "../../BlogsItem";

const BlogsSection = ({ state }) => {
  return (
    <section id="Blogs" className={`section ${style.blogs}`} title="Blogs">
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"My Blogs."} />
        </div>
        <div className={style.content}>
          <ul className={style.list}>
            {state.blogs.map((item) => (
              <BlogsItem key={item.id} descText={item.descText} />
            ))}
          </ul>
          <div className={style.mainButton}>
            <MainButton linkTo="blogs" label={"All Blogs"} />
          </div>
        </div>
      </div>
    </section>
  );
};

BlogsSection.propTypes = {
  state: PropTypes.object.isRequired,
};

export default BlogsSection;
