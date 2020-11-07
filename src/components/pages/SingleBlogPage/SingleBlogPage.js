import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import style from "./SingleBlogPage.module.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import SingleBlogSection from "../../sections/SingleBlogSection";

const SingleBlogPage = ({ state }) => {
  const [page, setPage] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setPage("singleBlog");
    return () => {
      window.scrollTo(0, 0);
      setPage(null);
    };
  }, []);
  return (
    <div className="wrapper">
      <Header page={page} state={state} />
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
