import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import useTranslation from 'next-translate/useTranslation';


import banner1 from "../../assets/images/main-slider/slider-1-1.jpg";
import banner2 from "../../assets/images/main-slider/slider-1-2.jpg";
import banner3 from "../../assets/images/main-slider/slider-2-1.jpg";

SwiperCore.use([Autoplay, Pagination, EffectFade]);



const MainSlider = () => {
  const { t, lang } = useTranslation();

  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <section className="main-slider" id="HomePage">
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
            <Row className="row justify-content-end">
              <div className="w-1/2 text-right">
                <h2>{t('common:Hayallerinizi')}  </h2>
                <h2>{t('common:yörüngeye')}</h2>
                <h2>{t('common:Gönderin!')}</h2> <a
                  href="#donate-options-section"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn"
                >
                  {t('common:Hayal Et!')}
                </a>
              </div>
            </Row>
          </Container>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainSlider;
