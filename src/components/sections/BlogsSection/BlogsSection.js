import React from "react";
import PropTypes from "prop-types";

import style from "./BlogsSection.module.scss";
import SectionTitle from "../../SectionTitle";
import MainButton from "../../MainButton";
import BlogItem from "../../BlogItem";
import WaveShape from "../../WaveShape";

const BlogsSection = ({ state }) => {
  return (
    <section id="Blogs" className={`section ${style.blogs}`} title="Blogs">
      <WaveShape color="#278ad5" />
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"My Blogs."} />
        </div>
        <div className={style.content}>
          <ul className={style.list}>
            {state.blogs.map((item) => (
              <BlogItem linkTo={item.linkTo} key={item.id} descText={item.descText} />
            ))}
          </ul>
          <div className={style.mainButton}>
            <MainButton linkTo="/blogs" label={"All Blogs"} />
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
