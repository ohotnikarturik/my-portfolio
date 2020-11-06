import React from "react";
import PropTypes from "prop-types";

import style from "./SingleBlogPage.module.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import SingleBlogSection from "../../sections/SingleBlogSection";

const SingleBlogPage = ({ state }) => {
  return (
    <div className="wrapper">
      <Header state={state} />
      <main className={style.main}>
        <SingleBlogSection state={state}/>
      </main>
      <Footer state={state} />
    </div>
  );
};

SingleBlogPage.propTypes = {
  state: PropTypes.object.isRequired,
};

export default SingleBlogPage;
