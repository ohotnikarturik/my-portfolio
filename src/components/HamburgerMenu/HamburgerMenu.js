import React from "react";
import PropTypes from "prop-types";

import style from "./HamburgerMenu.module.scss";

const HamburgerMenu = ({ onClick }) => {
  return (
    <div onClick={onClick} className={style.hamburgerMenu}>
      <a className={style.link} aria-label="menu navigation">
        <ul className={style.list}>
          <li className={style.item} />
          <li className={style.item} />
          <li className={style.item} />
        </ul>
      </a>
    </div>
  );
};

HamburgerMenu.propTypes = {
  onClick: PropTypes.func,
};

export default HamburgerMenu;
