import React from "react";
// import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops";

import style from "./ContactsSection.module.scss";
import SectionTitle from "../../SectionTitle";
import SendEmail from "../../SendEmail";
import VisibilitySensor from "../../VisibilitySensor";
import sprite from "../../../assets/img/sprite.svg";

const ContactsSection = () => {
  return (
    <section
      id="Contact"
      className={`section ${style.contacts}`}
      title="Contacts"
    >
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"Contact."} />
        </div>
        <VisibilitySensor partialVisibility once offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(400px)",
              }}
            >
              {(props) => (
                <div style={props} className={style.content}>
                  <div className={style.contentImageContainer}>
                    <svg className={style.contentImage }>
                      <use href={`${sprite}#delivery`} />
                    </svg>
                  </div>
                  <div className={style.formContainer}>
                    <SendEmail />
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

// ContactsSection.propTypes = {
//   state: PropTypes.object.isRequired,
// };

export default ContactsSection;
