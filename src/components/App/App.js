import React, { useEffect, useState } from "react";
import "normalize.css";
import PropTypes from "prop-types";
import "autoprefixer";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../Routes";
import Spinner from "../Spinner";
import style from "./App.module.scss";

const App = ({ state }) => {
  const [isSpinner, setIsSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSpinner(false);
    }, 1500);
  }, []);

  if (isSpinner)
    return (
      <div className={style.spinnerContainer}>
        <Spinner />
      </div>
    );

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
