import React, { useState } from "react";
import VSensor from "react-visibility-sensor";

// eslint-disable-next-line react/prop-types
const VisibilitySensor = ({ once, children, ...theRest }) => {
  const [active, setActive] = useState(true);
  
  return (
    <VSensor
      active={active}
      onChange={(isVisible) =>
        once &&
        isVisible &&
        setActive(false)
      }
      {...theRest}
    >
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  );
};

export default VisibilitySensor;
