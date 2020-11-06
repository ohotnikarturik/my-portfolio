import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import style from "./AllBlogsPage.module.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import AllBlogsSection from "../../sections/AllBlogsSection";

const AllBlogsPage = ({ state }) => {
  const [isNavHide, setIsNavHide] = useState(false);
  console.log(isNavHide)
  
  useEffect(() => {
      window.scrollTo(0, 0);
      setIsNavHide(true)
    return () => {
      window.scrollTo(0, 0);
      setIsNavHide(false)
    }
  }, []);
  
  return (
    <div className="wrapper">
      <Header isNavHide={isNavHide} state={state} />
      <main className={style.main}>
        <AllBlogsSection state={state} />
      </main>
      <Footer state={state} />
    </div>
  );
};

AllBlogsPage.propTypes = {
  state: PropTypes.object.isRequired,
};

export default AllBlogsPage;
