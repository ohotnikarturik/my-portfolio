import React from "react";
import PropTypes from "prop-types";

import style from "./MainPage.module.scss";
import HomeSection from "../../sections/HomeSection";
import WorksSection from "../../sections/WorksSection";
import SkillsSection from "../../sections/SkillsSection";
// import BlogsSection from "../../sections/BlogsSection";
import ContactsSection from "../../sections/ContactsSection";
import ParallaxSection from "../../sections/ParallaxSection";
import Footer from "../../Footer";
import CertificatesSection from "../../sections/CertificatesSection";

const MainPage = ({ state }) => {
  return (
    <div className="wrapper">
      <main className={style.main}>
        <HomeSection state={state} />
        <WorksSection state={state} />
        <SkillsSection state={state} />
        <ParallaxSection middlSectionImg state={state}/>
        <CertificatesSection state={state} />
        <ContactsSection state={state} />
        <ParallaxSection state={state}/>
      </main>
      <Footer state={state} />
    </div>
  );
};

MainPage.propTypes = {
  state: PropTypes.object.isRequired,
};

export default MainPage;
