import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import aboutImage from "../../assets/images/resources/about-counter-1-1.jpg";
import aboutHeart from "../../assets/images/shapes/about-count-heart-1-1.png";
import styles from "./style.module.css";
import useTranslation from "next-translate/useTranslation";

const AboutCounter = () => {
  const { t, lang } = useTranslation();

  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };

  return (
    <section className="about-counter " style={{paddingTop:"7%"}}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="block-title">
              {" "}
              <p>
                <img src={heartImage} width="15" alt="" />
                {t("common:Hayalinizi yörüngeye göndelim!")}
              </p>
              <h2 style={{ paddingTop: "20px" }} className={styles.youCanShare}>
                {t("common:Hayalinizi Bizimle Paylaşın!")}
              </h2>
            </div>
            <p className="about-counter__text">
              {t("common:Hayallere farkındalık yaratmak")}
              <a href="http://nftdoit.net/" target="_blank">
                {" "}
              </a>{" "}
            </p>
            <ul className="list-unstyled ul-list-two">
              <div style={{color:"var(--thm-black)"}}>{t("common:All kinds of dreams")}</div>
              <li>{t("common:Kişisel hayalleriniz")}</li>
              <li>{t("common:Fikirleriniz, düşünceleriniz")}</li>
              <li>{t("common:Gelecek planlarınız")}</li>
            </ul>
            <a
              href="https://nft.valentura.com/create"
              className="about-counter__count"
              target="_blank"
            >
              <p>{t("common:Hayalini Duyur")}</p>
            </a>
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              {/* <div className="about-counter__image-content">
                
                <p style={{ color: "black" }}>
                  All process takes less than a minute
                </p>
              </div> */}
              <img src={aboutImage} alt="" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCounter;
