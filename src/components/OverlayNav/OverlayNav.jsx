import React from "react";
import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-scroll";

import style from "./OverlayNav.module.scss";
import Logo from "../Logo";
import VisibilitySensor from "../VisibilitySensor";

const OverlayNav = ({ state, onClick }) => {
  return (
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
          }}
        >
          {(props) => (
            <div
              style={props}
              className={`container ${style.overlayContainer}`}
            >
              <div className={style.overlayHeader}>
                <Logo />
                <a onClick={onClick} className={style.btnClose}>
                  X
                </a>
              </div>
              <ul className={style.overlayNavList}>
                {state.navHome.map((item) => (
                  <li key={item.id} className={style.item}>
                    <Link to={item.name}
                          onClick={onClick}
                          className={style.link}
                          activeClass={style.link_active}
                          spy={true}
                          smooth={true}
                          duration={500}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
};

OverlayNav.propTypes = {
  onClick: PropTypes.bool,
  state: PropTypes.object,
};

export default OverlayNav;
