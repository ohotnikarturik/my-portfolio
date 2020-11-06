import React from "react";
import "normalize.css";
import PropTypes from "prop-types";
import "autoprefixer";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../Routes";

const App = ({state}) => {
  return (
    <Router>
      <Routes state={state}/>
    </Router>
  );
};

App.propTypes = {
  state: PropTypes.object.isRequired,
};

export default App;
