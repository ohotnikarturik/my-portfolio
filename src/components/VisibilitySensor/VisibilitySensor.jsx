import React, { useState } from "react";
import VSensor from "react-visibility-sensor";
import PropTypes from "prop-types";

const VisibilitySensor = ({ once, children, ...theRest }) => {
  const [active, setActive] = useState(true);

  return (
    <VSensor
      active={active}
      onChange={(isVisible) => once && isVisible && setActive(false)}
      {...theRest}
    >
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  );
};

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  children: PropTypes.func.isRequired,
};

VisibilitySensor.defaultProps = {
  once: false,
};

export default VisibilitySensor;
