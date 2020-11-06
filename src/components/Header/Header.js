import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "../../scss/index.scss";
import style from "./Header.module.scss";
import Logo from "../Logo";
import NavBarItem from "../NavBarItem";
import HamburgerMenu from "../HamburgerMenu";
// import ThemeMode from "../ThemeMode";

const Header = ({ state}) => {
  
  const [isFixedHeader, setIsFixedHeader] = useState(false);
  
  const scrollHandler = () => {
    if (window.scrollY > 120) {
      setIsFixedHeader(true);
    } else {
      setIsFixedHeader(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [isFixedHeader]);
  
  return (
    <header className={isFixedHeader ? style.header_fixed : style.header}>
      <div className={`container ${style.container}`}>
        <div className={isFixedHeader ? style.logo_notVisible : null}>
          <Logo />
        </div>
        <div className={style.nav}>
          <ul className={style.list}>
            {state.navHome.map((item) => (
              <NavBarItem key={item.id} name={item.name} />
            ))}
          </ul>
          <HamburgerMenu />
        </div>
        <div className={style.themeMode}>
          {/*<ThemeMode />*/}
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
