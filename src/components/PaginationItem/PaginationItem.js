import React from "react";
import PropTypes from "prop-types";

import style from "./PaginationItem.module.scss"

const PaginationItem = ({ id }) => {
  return (
      <li className={style.paginationItem}>
        <a href="#" className={style.paginationLink}>{id}</a>
      </li>
  );
};

PaginationItem.propTypes = {
  id: PropTypes.number,
  
};

export default PaginationItem;
