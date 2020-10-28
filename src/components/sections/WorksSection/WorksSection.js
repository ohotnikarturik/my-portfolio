import React from "react";
import PropTypes from "prop-types";

import style from "./WorksSection.module.scss";
import SectionTitle from "../../SectionTitle";
import MainButton from "../../MainButton";
import WorksItem from "../../WorksItem";

const WorksSection = ({ state }) => {
  return (
    <section className={`section ${style.works}`} title="Works">
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"My Works."} />
        </div>
        <div className={style.content}>
          <ul className={style.list}>
            {state.works.map((item) => (
              <WorksItem
                key={item.id}
                subtitle={item.subtitle}
                descText={item.descText}
              />
            ))}
          </ul>
          <div className={style.mainButton}>
            <MainButton label={"All Works"} />
          </div>
        </div>
      </div>
    </section>
  );
};

WorksSection.propTypes = {
  state: PropTypes.object.isRequired,
};

export default WorksSection;
