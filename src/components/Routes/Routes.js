import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import AllBlogsPage from "../pages/AllBlogsPage";
import SingleBlogPage from "../pages/SingleBlogPage";
import MainPage from "../pages/MainPage";

const Routes = ({state}) => {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage state={state} />
      </Route>
      <Route path="/blogs" exact>
        <AllBlogsPage state={state} />
      </Route>
      <Route path="/blog" exact>
        <SingleBlogPage state={state} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

Routes.propTypes = {
  state: PropTypes.object.isRequired,
};

export default Routes;
