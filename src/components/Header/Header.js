import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../../scss/index.scss";
import myImg from "../../assets/img/content/my-photo-535x535.png";
import style from "./Header.module.scss";
import Logo from "../Logo";
import NavBarItem from "../NavBarItem";
import HamburgerMenu from "../HamburgerMenu";
import Progress from "../Progress";
import OverlayNav from "../OverlayNav";

const Header = ({ state, page }) => {
  const [isFixedHeader, setIsFixedHeader] = useState(false);
  const [isShowOverlay, setIsShowOverlay] = useState(false);

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

  const showOverlayNav = () => {
    setIsShowOverlay(true);
  };

  const hideOverlayNav = () => {
    setIsShowOverlay(false);
  };

  const setNavigation = (navPage) => {
    switch (navPage) {
      case "allBlogs":
        return (
          <li>
            <Link to="/" className={style.link}>
              Home
            </Link>
          </li>
        );
      case "singleBlog":
        return (
          <>
            <li className={style.navItem}>
              <Link to="/" className={style.link}>
                Home
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/blogs" className={style.link}>
                All Blogs
              </Link>
            </li>
          </>
        );
      default:
        return state.navHome.map((item) => (
          <NavBarItem key={item.id} name={item.name} />
        ));
    }
  };

  if (isShowOverlay) {
    return <OverlayNav page={page} state={state} onClick={hideOverlayNav} />;
  }

  return (
    <header className={isFixedHeader ? style.header_fixed : style.header}>
      <Progress />
      <div className={`container ${style.container}`}>
        <div className={style.logoContainer}>
          {isFixedHeader ? (
            <Logo />
          ) : (
            <div className={style.greetingContainer}>
              <img className={style.imgPic} src={myImg} alt="developer" />
              <div className={style.greeting}>
                <span className={style.greetingText}>
                  Hi, I&apos;m Artur
                </span>
              </div>
            </div>
          )}
        </div>
        <div className={style.nav}>
          <ul className={style.list}>{setNavigation(page)}</ul>
          <HamburgerMenu onClick={showOverlayNav} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  state: PropTypes.object.isRequired,
  isFixedHeader: PropTypes.bool,
  page: PropTypes.string,
};

export default Header;
