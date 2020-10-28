import React from "react";

import style from "./HamburgerMenu.module.scss";

const HamburgerMenu = () => {
  return (
    <div className={style.hamburgerMenu}>
      <a
        href="#"
        className={style.link}
        aria-label="menu navigation"
      >
        <ul className={style.list}>
          <li className={style.item} />
          <li className={style.item} />
          <li className={style.item} />
        </ul>
      </a>
    </div>
  );
};

export default HamburgerMenu;
