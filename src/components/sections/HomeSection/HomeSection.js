import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import imgHome from "../../../assets/img/content/hero-img.svg";
import sprite from "../../../assets/img/sprite.svg";
import style from "./HomeSection.module.scss";
import SectionTitle from "../../SectionTitle";
import SocialsItem from "../../SocialsItem";
import ArrowDown from "../../ArrowDown";
import Header from "../../Header";

const HomeSection = ({ state }) => {
  const [isFixedHeader, setIsFixedHeader] = useState(false);
  
  const scrollHandler = () => {
    if (window.scrollY > 120) {
      setIsFixedHeader(true);
    } else {
      setIsFixedHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () =>
      window.removeEventListener("scroll", scrollHandler);
  }, [isFixedHeader]);

  return (
    <section id="Home" className={style.home} title="Home">
      <Header isFixedHeader={isFixedHeader} state={state} />
      <div
        className={`container ${style.container}`}
      >
        <div className={style.desc}>
          <div className={style.descGreeting}>
            <span className={style.descGreetingText}>Hello, I&apos;m</span>
          </div>
          <div className={style.title}>
            <h1 className={style.titleName}>Artur.</h1>
          </div>
          <div className={style.profession}>
            <SectionTitle title={"Full Stack Developer"} />
          </div>
          <div className={style.markContainer}>
            <h4 className={style.markTitle}>
              Available for new works
            </h4>
            <svg className={style.markImg}>
              <use href={sprite + "#mark"} />
            </svg>
          </div>
          <div className={style.socials}>
            <ul className={style.list}>
              {state.socials.map((item) => (
                <SocialsItem
                  key={item.id}
                  ariaLabel={item.ariaLabel}
                  img={item.img}
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
    </section>
  );
};

HomeSection.propTypes = {
  state: PropTypes.object.isRequired,
};

export default HomeSection;
