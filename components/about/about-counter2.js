import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import aboutImage from "../../assets/images/resources/about-counter-1-1.jpg";
import aboutHeart from "../../assets/images/shapes/about-count-heart-1-1.png";
import sunwoman from "../../assets/images/nfts/Güneş/1.jpg";
import styles from "./style.module.css";
import { Link } from "react-scroll";

const AboutCounter = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };

  return (
    <section className="about-counter pt-120" style={{ paddingBottom: "80px" }}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="block-title">
              <p>
                <img src={heartImage} width="15" alt="" />
                Chain of Solidarity and Solidarity
              </p>
              <h3 className={styles.youCanShare}>What is Purple Moony?</h3>
            </div>
            <p className="about-counter__text" style={{ fontSize: "18px" }}>
              {t(
                "As our partners and technology company regarding the unfortunate event in Iran, we would like to support this call To all women who want to show that women are free and that all humanity stands by them; We want him to send us his feelings, thoughts or a picture he has drawn The images and thoughts you submit will be NFT and will be available for sale on a popular NFT platform We want you to have a share in this campaign, which we aim to cover the whole world revenue from NFTs; We will donate through our partners to break the shackles of women's freedom Since the money raised will be obtained from the sale of NFT, we want it to show that we support all women in the world as it provides transparency and control over blockchain"
              )}
            </p>
            {/* <ul className="list-unstyled ul-list-one">
              <li>Your feelings and thoughts</li>
              <li>Your slogans</li>
              <li>Your pictures and arts</li>
            </ul> */}
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              {/* <div className="about-counter__image-content">
                <img src={aboutHeart} alt="" />
                <p>We’re here to support you every step of the way.</p>
              </div> */}
              <img src={sunwoman} alt="" className="float-left" width="100%" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCounter;
