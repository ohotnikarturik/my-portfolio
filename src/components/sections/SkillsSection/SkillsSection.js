import React from "react";
import PropTypes from "prop-types";

import style from "./SkillsSection.module.scss";
import SectionTitle from "../../SectionTitle";
import SkillsItem from "../../SkillsItem";
import TriangleShape from "../../TriangleShape";

const SkillsSection = ({ state }) => {
  return (
    <section id="Skills" className={`section ${style.skills}`} title="Skills">
      <TriangleShape color="#e2e2e2" />
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
                href={item.href}
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
