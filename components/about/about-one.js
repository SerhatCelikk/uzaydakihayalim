import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about1 from "../../assets/images/shapes/about-bag-1-1.png";
import about2 from "../../assets/images/resources/about-1-1.jpg";
import about3 from "../../assets/images/resources/about-1-2.jpg";
import heart from "../../assets/images/shapes/heart-2-1.png";

const AboutOne = () => {
  return (
    <section className="about-one pb-40">
      {/* <Container>
        <Row>
          <div className="about-one__award">
            <img src={about1} alt="" />
          </div>
          <Col lg={6}>
            <img src={about2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <img src={about3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container> */}
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={4}>
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" />
                  NFT Submission Conditions
                </p>
                <h3>To support the campaign</h3>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">
                via Twitter; After using the{" "}
                <span style={{ color: "#A213E1" }}>#freer #purplemoony</span>{" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  @valentura
                </span>{" "}
                {t(
                  "expressions, you can share your message or add the picture you want to be NFT"
                )}
              </p>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">
                {t(
                  "At the same time; You can participate by filling out the form on the purplemoonyorg website Afterwards, your submissions will be included in our donations as NFT"
                )}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      {/* <a
        href="https://forms.gle/rQLyPwL39cVv18Q37"
        className="about-counter__count"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <p>Start Sharing</p>
      </a> */}
    </section>
  );
};

export default AboutOne;
