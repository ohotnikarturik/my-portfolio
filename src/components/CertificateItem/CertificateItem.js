import React from "react";
import PropTypes from "prop-types";

import style from "./CertificateItem.module.scss";

const CertificateItem = ({ img }) => {
  return (
    <li className={style.item}>
      <div className={style.imgContsiner}>
          <img src={img} className={style.img} alt="pic"/>
      </div>
    </li>
  );
};

CertificateItem.propTypes = {
  img: PropTypes.string,
};

export default CertificateItem;
