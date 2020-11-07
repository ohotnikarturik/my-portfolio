import React, { useEffect, useState } from "react";
import "normalize.css";
import PropTypes from "prop-types";
import "autoprefixer";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../Routes";
import Spinner from "../Spinner";

const App = ({ state }) => {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 2000);
  }, []);

  if (appLoading) return <Spinner />;

  return (
    <Router>
      <Routes state={state} />
    </Router>
  );
};

App.propTypes = {
  state: PropTypes.object.isRequired,
};

export default App;
