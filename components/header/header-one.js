import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "./nav-links";
import Link from "next/link";
import { MenuContext } from "../../context/menu-context";
import logoDark from "../../assets/images/logo-dark.png";
import StoreContext from "../../context/store";
import { useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';
import styles from "./style.module.css";


const HeaderOne = () => {
  const { t, lang } = useTranslation()

  const { menuStatus, updateMenuStatus } = useContext(MenuContext);

  const router = useRouter();

  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  const { handleConnect } = useContext(StoreContext);

  return (
    <header className="main-header" id="headerone">
      <Container>
        <div className="inner-container">
          <Row>
            <Col sm={12} md={12} lg={12} xl={2}>
              <div className="logo-box">
                <Link href="/">
                  <a aria-label="logo image">
                    <img src={logoDark} width="180" alt="" />
                  </a>
                </Link>
                <span
                  className="fa fa-bars mobile-nav__toggler"
                  onClick={handleMenuClick}
                ></span>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={12}
              xl={10}
              className="d-none d-md-none d-lg-none d-xl-block"
            >
              <div className="main-header__top">
                {/*i18nextConfig.i18n.locales.map((locale) => {
                  if (locale === currentLocale) return null;
                  return <LanguageSwitchLink locale={locale} key={locale} />;
                })*/}

                {/*<div style={{ color: "#05af50" }}>
                  <LanguageSwitchLink locale="tr" key="tr">
                    <a style={{ color: "#05af50" }}>TR</a>
                  </LanguageSwitchLink>
                  <span style={{ marginLeft: "5px", marginRight: "5px" }}>
                    |
                  </span>
                  <LanguageSwitchLink locale="en" key="en">
                    <a style={{ color: "#05af50" }}>EN</a>
                  </LanguageSwitchLink>
                </div>*/}
                <button className={styles.languagebuttonen} onClick={async () => await setLanguage('en')}>EN</button>
                <button className={styles.languagebuttontr} onClick={async () => await setLanguage('tr')}><span style={{color:"black"}}>|</span>TR</button>

                <p>{t('common:Bir Milyon Hayal')}</p>
                <div className="main-header__social">
                  <a href="" aria-label="twitter" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a href="" aria-label="instagram" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <nav className="main-menu dynamic-radius">
                <NavLinks />
              </nav>

              <div className="main-header__info">
                <ul className="list-unstyled main-header__info-list">
                  <li style={{ marginRight: "40px" }}>
                    <a href="mailto:join@hayalimuzayda.com">
                      <i className="azino-icon-email"></i> join@hayalimuzayda.com{" "}
                    </a>
                  </li>

                  <li>
                    <a style={{ color: "#05af50" }} href="https://twitter.com/" target="_blank">
                    {t('common:#hayalimuzayda')}
                    </a>
                  </li> <li>
                    <a style={{ color: "#05af50" }} href="https://twitter.com/" target="_blank">
                      @Valentura
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default HeaderOne;
