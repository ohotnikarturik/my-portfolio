import React from "react";
import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops";

import style from "./WorksSection.module.scss";
import SectionTitle from "../../SectionTitle";
import TriangleShape from "../../TriangleShape/";
import VisibilitySensor from "../../VisibilitySensor/";
import MyWorksSlider from "../../Carousel/";

const WorksSection = ({state}) => {
  return (
    <section id="Works" className={`section ${style.works}`} title="Works">
      <TriangleShape color="#fff" />
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"My Works."} />
        </div>
        <VisibilitySensor partialVisibility once offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(400px)",
              }}
            >
              {(props) => (
                <div style={props} className={style.content}>
                  <MyWorksSlider state={state} />
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </section>
  );
};

WorksSection.propTypes = {
  state: PropTypes.object.isRequired,
};

export default WorksSection;
