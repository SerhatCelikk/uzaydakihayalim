import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "../block-title";
import testimonialImage1 from "../../assets/images/resources/testimonial-2-1.jpg";
import testimonialImage2 from "../../assets/images/resources/testimonial-2-2.jpg";
import testimonialImage3 from "../../assets/images/resources/testimonial-2-3.jpg";
import useTranslation from "next-translate/useTranslation";

SwiperCore.use([Autoplay, Thumbs]);

const TESTIMONIALS_DATA = [
  {
    image: testimonialImage1,
    name: "Christine Rose",
    designation: "Customer",
    text: "This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch.",
  },
  {
    image: testimonialImage2,
    name: "Christine Rose",
    designation: "Customer",
    text: "This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch.",
  },
  {
    image: testimonialImage3,
    name: "Christine Rose",
    designation: "Customer",
    text: "This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch.",
  },
];

const TestimonialsTwo = () => {
  const { t, lang } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonialsThumbOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <section className="testimonials-two">
      <Container>
        <div className="team-about__top">
          <Row className="align-items-center">
            <Col md={12} lg={4}>
              <BlockTitle
                title={t("common:Nasıl Katılım Sağlayabilirim?")}
                tagLine={t("common:Hayalin mi var?")}
              />
            </Col>
            <Col md={6} lg={4}>
              <p className="team-about__top-text">
                {t("common:Twitter üzerinden;")}
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  style={{ color: "blue", fontWeight: "bold" }}
                >
                  {" "}
                  #hayalimuzayda
                </a>
                {t("common:,tag")}
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  style={{ color: "blue", fontWeight: "bold" }}
                >
                  {" "}
                  @valentura
                </a>{" "}
                {t("common:hashtag ve taglerini")}
              </p>
            </Col>
            <Col md={6} lg={4}>
              <p className="team-about__top-text">
              {t("common:If you are not using Twitter")}
                <a
                  href="https://www.hayalimuzayda.com"
                  target="_blank"
                  style={{ color: "blue", fontWeight: "bold" }}
                >
                  www.hayalimuzayda.com
                </a>{" "}
                {t("common:websitesindeki formu")}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsTwo;
