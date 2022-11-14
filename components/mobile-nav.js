import React, { useContext } from "react";
import Link from "next/link";
import NavLinks from "./header/nav-links";

import logoLight from "../assets/images/logo-light.png";
import flag1 from "../assets/images/resources/flag-1-1.jpg";
import { MenuContext } from "../context/menu-context";
import styles from "./style.module.css";
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

const MobileNav = () => {
  const { t, lang } = useTranslation()

  const { menuStatus, updateMenuStatus } = useContext(MenuContext);

  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  return (
    <div
      className={`mobile-nav__wrapper ${true === menuStatus ? "expanded" : ""}`}
    >
      <div
        className="mobile-nav__overlay side-menu__block-overlay"
        onClick={handleMenuClick}
      ></div>
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close side-menu__close-btn"
          onClick={handleMenuClick}
        >
          <i className="far fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <img src={logoLight} width="101" alt="" />
            </a>
          </Link>
          <div className={styles.mbllanguage}><button className={styles.mbllanguagebuttonen} onClick={async () => await setLanguage('en')}>EN</button>
                <button className={styles.mbllanguagebuttontr} onClick={async () => await setLanguage('tr')}><span style={{color:"white"}}>|</span>TR</button></div>
          
          
        </div>
        
        <div className="mobile-nav__container">
          <NavLinks />
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="azino-icon-email"></i>
            <a href="mailto:join@hayalimuzayda.com">join@hayalimuzayda.com</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          {/*  <div style={{ color: "#A314E1" }}>
            <LanguageSwitchLink locale="tr" key="tr">
              <a style={{ color: "#A314E1" }}>TR</a>
            </LanguageSwitchLink>
            <span style={{ marginLeft: "5px", marginRight: "5px" }}>|</span>
            <LanguageSwitchLink locale="en" key="en">
              <a style={{ color: "#A314E1" }}>EN</a>
            </LanguageSwitchLink>
          </div>  */}
          <div className="mobile-nav__social">
            <a href="" aria-label="twitter" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>

            <a href="" aria-label="instagram" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
