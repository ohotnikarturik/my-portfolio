import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

import imgHome from "../../../assets/img/content/hero-img.svg";
import sprite from "../../../assets/img/sprite.svg";
import style from "./HomeSection.module.scss";
import SectionTitle from "../../SectionTitle";
import SocialsItem from "../../SocialsItem";
import ArrowDown from "../../ArrowDown";
import Header from "../../Header";
import VisibilitySensor from "../../VisibilitySensor";

const HomeSection = ({ state }) => {
  return (
    <section id="Home" className={style.home} title="Home">
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
                  <div className={style.descGreeting}>
                    <span className={style.descGreetingText}>
                      Hello, I&apos;m
                    </span>
                  </div>
                  <div className={style.title}>
                    <h1 className={style.titleName}>Artur.</h1>
                  </div>
                  <div className={style.profession}>
                    <SectionTitle title={"Full Stack Developer"} />
                  </div>
                  <div className={style.desc}>
                    <h4 className={style.descTitle}>I can build web and mobile applications</h4>
                  </div>
                  <div className={style.markContainer}>
                    <h4 className={style.markTitle}>Available for new works</h4>
                    <svg className={style.markImg}>
                      <use href={sprite + "#mark"} />
                    </svg>
                  </div>
                  <div className={style.myCvContainer}>
                    <h4 className={style.myCvTitle}>My CV</h4>
                    <Link
                      to="/files/my-cv.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg className={style.openFileImg}>
                        <use href={sprite + "#openPage"} />
                      </svg>
                    </Link>
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

                <div className={style.img}>
                  <img className={style.imgPic} src={imgHome} alt="developer" />
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
