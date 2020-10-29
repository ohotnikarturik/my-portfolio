import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

import style from "./NavBarItem.module.scss";

const NavBarItem = ({ name }) => {
  return (
    <li className={style.item}>
      <Link href="#" to={name}
            className={style.link}
            activeClass={style.link_active}
            spy={true}
            smooth={true}
            duration={500}>
        {name}
      </Link>
    </li>
  );
};

NavBarItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavBarItem;
