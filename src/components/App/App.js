import React from "react";
import "normalize.css";
import PropTypes from "prop-types";
import "autoprefixer";
import { BrowserRouter as Router } from "react-router-dom";

// import style from "./App.module.scss";
import MainPage from "../pages/MainPage";
// import AllBlogsPage from "../pages/AllBlogsPage";
// import SingleBlogPage from "../pages/SingleBlogPage";

const App = ({ state }) => {
  return (
    <Router>
      <MainPage state={state} />
      {/*<AllBlogsPage state={state}/>*/}
      {/*<SingleBlogPage state={state}/>*/}
    </Router>
  );
};

App.propTypes = {
  state: PropTypes.object.isRequired,
};

export default App;
