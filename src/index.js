import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import state from "./state";

ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById("root")
);
