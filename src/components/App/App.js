import React, { useEffect, useState } from "react";
import "normalize.css";
import PropTypes from "prop-types";
import "autoprefixer";
import { BrowserRouter as Router } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Routes from "../Routes";
import Spinner from "../Spinner";
import style from "./App.module.scss"

const options = {
  offset: "100px",
  timeout: 4000,
  position: positions.TOP_CENTER,
};

const App = ({ state }) => {
  const [isSpinner, setIsSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSpinner(false);
    }, 2000);
  }, []);

  if (isSpinner) return <div className={style.spinnerContainer}><Spinner /></div> ;

  return (
    <Provider template={AlertTemplate} {...options}>
      <Router>
        <Routes state={state} />
      </Router>
    </Provider>
  );
};

App.propTypes = {
  state: PropTypes.object.isRequired,
};

export default App;
