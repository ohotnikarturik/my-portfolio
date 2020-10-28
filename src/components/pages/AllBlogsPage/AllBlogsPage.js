import React from "react";
import PropTypes from "prop-types";

import style from "./AllBlogsPage.module.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import ParallaxSection from "../../sections/ParallaxSection";
import AllBlogsSection from "../../sections/AllBlogsSection";

const AllBlogsPage = ({ state }) => {
  return (
    <div className="wrapper">
      <Header state={state} />
      <main className={style.main}>
        <AllBlogsSection state={state} />
        <ParallaxSection />
      </main>
      <Footer state={state} />
    </div>
  );
};

AllBlogsPage.propTypes = {
  state: PropTypes.object.isRequired,
};

export default AllBlogsPage;
