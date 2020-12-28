import React from "react";

import "../../scss/index.scss"
import style from "./Footer.module.scss";
import Logo from "../Logo";
import PropTypes from "prop-types";
import SocialsItem from "../SocialsItem";

const Footer = ({ state }) => {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.container}`}>
        <div className={style.socials}>
          <ul className={style.list}>
            {state.socials.map((item) => (
              <SocialsItem
                whiteColor
                key={item.id}
                ariaLabel={item.ariaLabel}
                img={item.img}
                link={item.link}
              />
            ))}
          </ul>
        </div>
        <div className={style.copyright}>
          <div className={style.copyrightText}>© Artur Okhotnichenko</div>
        </div>
        <div className={style.logo}>
          <Logo classModifier classModifierText/>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  state: PropTypes.object.isRequired
};

export default Footer;
