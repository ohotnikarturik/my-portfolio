import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import style from "./AllBlogsPage.module.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import AllBlogsSection from "../../sections/AllBlogsSection";

const AllBlogsPage = ({ state }) => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPage("allBlogs");
    return () => {
      window.scrollTo(0, 0);
      setPage(null);
    };
  }, []);

  return (
    <div className="wrapper">
      <Header page={page} state={state} />
      <main className={style.main}>
        <AllBlogsSection page={page} state={state} />
      </main>
      <Footer state={state} />
    </div>
  );
};

AllBlogsPage.propTypes = {
  state: PropTypes.object.isRequired,
};

export default AllBlogsPage;
