import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { Spring } from "react-spring/renderprops"
import PreloadImage from "react-preload-image"

import backgroundImage from "../../../assets/img/bg/mountain1.jpg"
import sprite from "../../../assets/img/sprite.svg"
import style from "./HomeSection.module.scss"
import SectionTitle from "../../SectionTitle"
import SocialsItem from "../../SocialsItem"
import ArrowDown from "../../ArrowDown"
import Header from "../../Header"

const HomeSection = ({ state }) => {
  // const bgImageStyle = (src) => ({
  //   backgroundImage: `url(${src})`,
  // })

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{
        delay: 300,
        duration: 700,
      }}
    >
      {(props) => (
        <div style={props}>
          <PreloadImage src={backgroundImage} lazy className={style.home}>
            <section id="Home" title="Home">
              <Header state={state} />
              <div className={`container ${style.container}`}>
                <div className={style.descContainer}>
                  <div className={style.profession}>
                    <SectionTitle title={"Software Developer"} />
                  </div>
                  <div className={style.desc}>
                    <div className={style.descText}>
                      I am a developer with a visual eye for web experiences.
                    </div>
                    <div className={style.descText}>
                      Code is my passion. I love{" "}
                      <svg className={style.heartImg}>
                        <use href={sprite + "#heart"} />
                      </svg>{" "}
                      to code every day.
                    </div>
                    <div className={style.descText}>
                      I like to create something new all the time,
                    </div>
                    <div className={style.descText}>
                      meet new challenges and solve them.
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
            </section>
          </PreloadImage>
        </div>
      )}
    </Spring>
  )
}

HomeSection.propTypes = {
  state: PropTypes.object.isRequired,
}

export default HomeSection
