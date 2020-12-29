import React from "react";
import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops";

import style from "./CertificatesSection.module.scss";
import SectionTitle from "../../SectionTitle";
import WaveShape from "../../WaveShape";
import VisibilitySensor from "../../VisibilitySensor";
import CertificateItem from "../../CertificateItem/CertificateItem";

const Certificates = ({state}) => {
  return (
    <section id="Certifications" className={`section ${style.certificates}`} title="Certificates">
      <WaveShape />
      <div className={`container ${style.container}`}>
        <div className={style.title}>
          <SectionTitle title={"My Certifications."} />
        </div>
        <VisibilitySensor partialVisibility once offset={{ bottom: -400 }}>
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
                    {state.certificates.map((item) => (
                      <CertificateItem key={item.id} img={item.img} />
                    ))}
                  </ul>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </section>
  );
};

Certificates .propTypes = {
  state: PropTypes.object.isRequired,
};

export default Certificates ;
