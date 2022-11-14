import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "../block-title";
import testimonialImage1 from "../../assets/images/resources/testimonial-2-1.jpg";
import testimonialImage2 from "../../assets/images/resources/testimonial-2-2.jpg";
import testimonialImage3 from "../../assets/images/resources/testimonial-2-3.jpg";

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
            <Col md={12} lg={7}>
              <BlockTitle title="" tagLine="About Us" />
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">
                We are space lovers and have a mission of bringing space avernes
                to public and youth. Our team consists pf space experts medi and
                marketing profesionals serial entreprenur metaverse developer
                and scientist.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsTwo;
