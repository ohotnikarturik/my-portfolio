import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

import backgroundImage from "../../../assets/img/bg/mountain.jpg";
import sprite from "../../../assets/img/sprite.svg";
import style from "./HomeSection.module.scss";
import SectionTitle from "../../SectionTitle";
import SocialsItem from "../../SocialsItem";
import ArrowDown from "../../ArrowDown";
import Header from "../../Header";
import VisibilitySensor from "../../VisibilitySensor";

const HomeSection = ({ state }) => {
  const bgImageStyle = (src) => ({
    backgroundImage: `url(${src})`,
  });

  return (
    <section
      id="Home"
      style={bgImageStyle(backgroundImage)}
      className={style.home}
      title="Home"
    >
      <Header state={state} />
      <VisibilitySensor partialVisibility once>
        {({ isVisible }) => (
          <Spring
            to={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            {(props) => (
              <div style={props} className={`container ${style.container}`}>
                <div className={style.descContainer}>
                  <div className={style.profession}>
                    <SectionTitle title={"Junior Full Stack Developer"} />
                  </div>
                  <div className={style.desc}>
                    <h4 className={style.descText}>
                      I can build web and mobile applications.
                    </h4>
                  </div>
                  <div className={style.desc}>
                    <div className={style.descText}>
                      Code is my passion. I like to code everyday, create
                      something new, meet new challenges and solve them. 
                    </div>
                  </div>
                  <div className={style.linksContainer}>
                    <div className={style.myCvContainer}>
                      <NavLink
                        className={style.link}
                        to="/files/my-cv.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className={style.myCvTitle}>My CV</div>
                        <svg className={style.openFileImg}>
                          <use href={sprite + "#openPage"} />
                        </svg>
                      </NavLink>
                    </div>
                    <div className={style.socials}>
                      <ul className={style.list}>
                        {state.socials.map((item) => (
                          <SocialsItem
                            key={item.id}
                            ariaLabel={item.ariaLabel}
                            img={item.img}
                            link={item.link}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={style.arrowDown}>
                  <ArrowDown />
                </div>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </section>
  );
};

HomeSection.propTypes = {
  state: PropTypes.object.isRequired,
};

export default HomeSection;
