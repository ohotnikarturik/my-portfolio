import React from "react";
import PropTypes from "prop-types";

import style from "./MainPage.module.scss";
import Header from "../../Header";
import HomeSection from "../../sections/HomeSection";
import WorksSection from "../../sections/WorksSection";
import SkillsSection from "../../sections/SkillsSection";
import BlogsSection from "../../sections/BlogsSection";
import ContactsSection from "../../sections/ContactsSection";
import ParallaxSection from "../../sections/ParallaxSection";
import Footer from "../../Footer";

const MainPage = ({ state }) => {
  return (
    <div className="wrapper">
      <Header state={state} />
      <main className={style.main}>
        <HomeSection state={state} />
        <WorksSection state={state} />
        <SkillsSection state={state} />
        <BlogsSection state={state} />
        <ContactsSection state={state} />
        <ParallaxSection />
      </main>
      <Footer state={state}/>
    </div>
  );
};

MainPage.propTypes = {
  state: PropTypes.object.isRequired,
};

export default MainPage;
