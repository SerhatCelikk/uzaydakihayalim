import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/page-header-1-1.jpg";
import HeartImage from "../../assets/images/shapes/noun-rocket-780226x_2.png";
import useTranslation from "next-translate/useTranslation";


const CallToActionTwo = () => {
  const { t, lang } = useTranslation();

  return (
    <section className="call-to-action-two">
      <div
        className="call-to-action-two__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Container className="container pt-80 pb-80">
        {/* <i className="azino-icon-charity call-to-action-two__icon"></i> */}
        <Row className=" align-items-start">
          <Col lg={7}>
            <div className="block-title">
              <p>
                <img src={HeartImage} width="15" alt="" />
                {t("common:birmilyonhayal")}
              </p>
              <h3>{t("common:#hayalimuzayda")} </h3>
            </div>
          </Col>
          <Col
            lg={5}
            className=" d-flex justify-content-start justify-content-lg-end"
          >
            <div className="btn-wrap">
              <Link href="#">
                <a className="scroll-to-target thm-btna" style={{marginTop:"20px"}}>
                {t("common:Tweet Gönder")}
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionTwo;
