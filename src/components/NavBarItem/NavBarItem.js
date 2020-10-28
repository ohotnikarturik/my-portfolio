import React from "react";
import PropTypes from "prop-types";

import style from "./NavBarItem.module.scss";

const NavBarItem = ({ name }) => {
  return (
    <li className={style.item}>
      <a href="#" className={style.link}>
        {name}
      </a>
    </li>
  );
};

NavBarItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavBarItem;
