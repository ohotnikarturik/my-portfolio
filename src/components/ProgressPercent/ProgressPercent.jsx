import React, { useState } from "react";
import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops";
import { useSpring, animated } from "react-spring";

import styles from "./ProgressPercent.module.scss";
import VisibilitySensor from "../VisibilitySensor";

const ProgressPercent = ({ completed }) => {
  const [initCompleted, setInitCompleted] = useState(0);

  const fillerStyles = {
    width: `${initCompleted}%`,
  };

  const spring = useSpring({
    config: { duration: 1000 },
    from: { val: initCompleted },
    to: { val: initCompleted },
  });

  return (
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <Spring
          to={{
            opacity: 1,
          }}
        >
          {(props) => (
            <div className={styles.containerStyles} style={props}>
              {isVisible && setInitCompleted(completed)}
              <div className={styles.fillerStyles} style={fillerStyles}>
                <animated.div className={styles.labelStyles}>
                  {spring.val.interpolate((val) => Math.floor(val))}
                </animated.div>
                <div className={styles.labelStyles}>%</div>
              </div>
            </div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
};

ProgressPercent.propTypes = {
  completed: PropTypes.number,
};

export default ProgressPercent;
