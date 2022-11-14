import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import footerlogo from "../assets/images/footer-logo.png";
import blogPost1 from "../assets/images/resources/footer-img-1-1.jpg";
import blogPost2 from "../assets/images/resources/footer-img-1-2.jpg";
import SVGWorldIcon from "../components/icons/worldIcon";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const { t, lang } = useTranslation();
  return (
    <section id="footer-section" className="site-footer" style={{textColor:"#fff"}}>
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Link href="/">
                  <a aria-label="logo image">
                    <img
                      src={footerlogo}
                      className="footer-widget__logo"
                      width="250"
                      alt=""
                    />
                  </a>
                </Link>
                <p style={{fontWeight:"bold"}}>{t("common:HAYALİM SINIRLARIN DIŞINDA!")}</p>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="mailto:join@hayalimuzayda.com">
                      <i className="azino-icon-email"></i>
                      join@hayalimuzayda.com
                    </a>
                  </li>

                  <li>
                    <a href="http://www.nftleyelim.com" target="_blank">
                      {/* <i className="azino-icon-pin"></i> */}
                      <i>
                        <SVGWorldIcon width={20} height={20} />
                      </i>
                      nftdoit.com
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            {/* <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="/causes">
                      <a>Our Causes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news">
                      <a>New Campaign</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      <a>Upcoming Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>Site Map</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Help</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/causes">
                      <a>Donate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Terms</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__blog">
                <h3 className="footer-widget__title">Blog</h3>
                <ul className="list-unstyled footer-widget__blog">
                  <li>
                    <img src={blogPost1} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link href="/news-details">
                        <a>You can help the poor in need</a>
                      </Link>
                    </h3>
                  </li>
                  <li>
                    <img src={blogPost2} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link href="/news-details">
                        <a>Rise fund for Healthy Food</a>
                      </Link>
                    </h3>
                  </li>
                </ul>
              </div>
            </Col> */}
            <Col lg={3} md={6} sm={12} />
            <Col lg={0} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__newsletter text-center">
                <h3 className="footer-widget__title" href="https://www.twitter.com" style={{fontWeight:"bold"}}>#hayalimuzayda</h3>
                <p style={{fontWeight:"bold"}}>
                {t("common:Sosyal medya hesaplarımızı")}
                
                </p>
                <br></br>
                <div className="footer-social " style={{width:"100%",justifyContent:"center"}}>
                  <a href="" aria-label="twitter" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a href="" aria-label="instagram" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p style={{color:"white",width:"100%",textAlign:"center"}}>© Copyright 2022 by Valentura.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
