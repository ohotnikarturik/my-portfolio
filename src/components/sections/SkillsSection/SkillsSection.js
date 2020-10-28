import React from "react";
import PropTypes from "prop-types";

import style from "./SkillsSection.module.scss";
import SectionTitle from "../../SectionTitle";
import SkillsItem from "../../SkillsItem";

const SkillsSection = ({ state }) => {
  return (
    <section className={`section ${style.skills}`} title="Skills">
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"My Skills."} classModifier />
        </div>
        <div className={style.content}>
          <ul className={style.list}>
            {state.skills.map((item) => (
              <SkillsItem
                key={item.id}
                ariaLabel={item.ariaLabel}
                img={item.img}
                subtitle={item.subtitle}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

SkillsSection.propTypes = {
  state: PropTypes.object.isRequired,
};

export default SkillsSection;
