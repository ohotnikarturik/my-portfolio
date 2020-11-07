import React from "react";
// import PropTypes from "prop-types";
import BarLoader from "react-spinners/BarLoader";

const Spinner = () => {
  return (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <BarLoader height={6} width={180}  color={"#278ad5"} />
    </div>
  );
};

// Spinner.propTypes = {
//
// };

export default Spinner;
