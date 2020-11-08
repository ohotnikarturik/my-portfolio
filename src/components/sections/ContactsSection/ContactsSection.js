import React from "react";
// import PropTypes from "prop-types";

import style from "./ContactsSection.module.scss";
import SectionTitle from "../../SectionTitle";
import WaveShape from "../../WaveShape";
import SendEmail from "../../SendEmail";

const ContactsSection = () => {
  return (
    <section id="Contact" className={`section ${style.contacts}`} title="Contacts">
      <WaveShape color="#ffffff" />
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"Contact."} />
        </div>
        <div className={style.content}>
          <SendEmail />
        </div>
      </div>
    </section>
  );
};

// ContactsSection.propTypes = {
//   state: PropTypes.object.isRequired,
// };

export default ContactsSection;
