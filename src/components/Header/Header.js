import React from "react";
import PropTypes from "prop-types";

import "../../scss/index.scss";
import style from "./Header.module.scss";
import Logo from "../Logo";
import NavBarItem from "../NavBarItem";
import HamburgerMenu from "../HamburgerMenu";
import ThemeMode from "../ThemeMode";

const Header = ({ state, isFixedHeader }) => {
  return (
    <header className={isFixedHeader ? style.header_fixed : style.header}>
      <div className={`container ${style.container}`}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.nav}>
          <ul className={style.list}>
            {state.nav.map((item) => (
              <NavBarItem key={item.id} name={item.name} />
            ))}
          </ul>
          <HamburgerMenu />
        </div>
        <div className={style.themeMode}>
          <ThemeMode />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  state: PropTypes.object.isRequired,
  isFixedHeader: PropTypes.bool
};

export default Header;
