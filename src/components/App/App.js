import React from "react";
import "normalize.css";
import PropTypes from "prop-types";
import "autoprefixer";

// import style from "./App.module.scss";
import MainPage from "../pages/MainPage";
// import AllBlogsPage from "../pages/AllBlogsPage";
// import SingleBlogPage from "../pages/SingleBlogPage";

const App = ({ state }) => {
  return (
    <>
      <MainPage state={state} />
      {/*<AllBlogsPage state={state}/>*/}
      {/*<SingleBlogPage state={state}/>*/}
    </>
  );
};

App.propTypes = {
  state: PropTypes.object.isRequired
};

export default App;
