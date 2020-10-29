import React from "react";
// import PropTypes from "prop-types";

import style from "./ContactsSection.module.scss";
import SectionTitle from "../../SectionTitle";
import MainButton from "../../MainButton";

const ContactsSection = () => {
  return (
    <section id="Contact" className={`section ${style.contacts}`} title="Contacts">
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"Contact."} />
        </div>
        <div className={style.content}>
          <form className={style.form}>
            <label className={style.label}>
              <input
                aria-label="input-1"
                className={style.input}
                type="text"
                placeholder="Name..."
              />
            </label>
            <label className={style.label}>
              <input
                aria-label="input-2"
                className={style.input}
                type="text"
                placeholder="Email..."
              />
            </label>
            <label className={style.label}>
              <textarea
                aria-label="textarea"
                className={style.textarea}
                placeholder="Type message..."
              />
            </label>
            <div className={style.mainButton}>
             <MainButton label={"Reset"}  type={"reset"} classModifier/>
             <MainButton label={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// ContactsSection.propTypes = {
//   state: PropTypes.object.isRequired,
// };

export default ContactsSection;
