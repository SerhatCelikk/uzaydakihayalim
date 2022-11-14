import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../assets/images/shapes/testimonials-map-1-1.png";
import heart from "../../assets/images/shapes/heart-2-1.png";
import image1 from "../../assets/images/resources/testimonial-1-1.jpg";
import image2 from "../../assets/images/resources/testimonial-1-2.jpg";
import image3 from "../../assets/images/resources/testimonial-1-3.jpg";
import useTranslation from "next-translate/useTranslation";

const TESTIMONIALS_ONE_DATA = [
  {
    image: image1,
    text: "There are many variations of passages of lorsum available but the majority have suffered alteration in form, by injected not humour.",
    name: "Alex Cooper",
    designation: "Customer",
  },
  {
    image: image2,
    text: "There are many variations of passages of lorsum available but the majority have suffered alteration in form, by injected not humour.",
    name: "Alex Cooper",
    designation: "Customer",
  },
  {
    image: image3,
    text: "There are many variations of passages of lorsum available but the majority have suffered alteration in form, by injected not humour.",
    name: "Alex Cooper",
    designation: "Customer",
  },
];

const TestimonialsOne = () => {
  const { t, lang } = useTranslation();
  return (
    <section
      className="testimonials-one pt-120 pb-90"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <div className="team-about__top">
          <Row className=" align-items-center">
            <Col md={12} lg={5}>
              <div className="block-title">
                <h1>
                {t("common:Hayalimi Neden Göndermeliyim?")}
                </h1>
              </div>
            </Col>
            <Col md={12} lg={7}>
              <p className="team-about__top-text">
              {t("common:Herkesin hayali vardır")}

              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsOne;
