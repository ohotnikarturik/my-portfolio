import React from "react";
import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops";

import style from "./SkillsSection.module.scss";
import SectionTitle from "../../SectionTitle";
import SkillsItem from "../../SkillsItem";
import TriangleShape from "../../TriangleShape";
import VisibilitySensor from "../../VisibilitySensor/VisibilitySensor";

const SkillsSection = ({ state }) => {
  return (
    <section id="Skills" className={`section ${style.skills}`} title="Skills">
      <TriangleShape color="#f4f4f4" />
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"My Skills."} />
        </div>
        <VisibilitySensor partialVisibility once >
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-200px)",
              }}
            >
              {(props) => (
                <div style={props} className={style.content}>
                  <ul className={style.list}>
                    {state.skills.map((item) => (
                      <SkillsItem
                        key={item.id}
                        ariaLabel={item.ariaLabel}
                        img={item.img}
                        subtitle={item.subtitle}
                        href={item.href}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </section>
  );
};

SkillsSection.propTypes = {
  state: PropTypes.object.isRequired,
};

export default SkillsSection;
