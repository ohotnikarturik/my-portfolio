import React from "react";
import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops";

import style from "./BlogsSection.module.scss";
import SectionTitle from "../../SectionTitle";
import MainButton from "../../MainButton";
import BlogItem from "../../BlogItem";
import WaveShape from "../../WaveShape";
import VisibilitySensor from "../../VisibilitySensor";

const BlogsSection = ({ state }) => {
  return (
    <section id="Blogs" className={`section ${style.blogs}`} title="Blogs">
      <WaveShape />
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"My Blogs."} />
        </div>
        <VisibilitySensor partialVisibility once>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(200px)",
              }}
            >
              {(props) => (
                <div style={props} className={style.content}>
                  <ul className={style.list}>
                    {state.blogs.map((item) => (
                      <BlogItem
                        linkTo={item.linkTo}
                        key={item.id}
                        descText={item.descText}
                      />
                    ))}
                  </ul>
                  <div className={style.mainButton}>
                    <MainButton linkTo="/blogs" label={"All Blogs"} />
                  </div>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </section>
  );
};

BlogsSection.propTypes = {
  state: PropTypes.object.isRequired,
};

export default BlogsSection;
