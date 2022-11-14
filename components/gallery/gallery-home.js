import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import GalleryCard from "./gallery-card";

import galleryImage1 from "../../assets/images/nfts/Ay/1.jpg";
import galleryImage2 from "../../assets/images/nfts/Ay/2.jpg";
import galleryImage3 from "../../assets/images/nfts/Balık/1 fix.jpg";
import galleryImage4 from "../../assets/images/nfts/Balık/2 fix.jpg";
import galleryImage5 from "../../assets/images/nfts/Bulut/1 fix.jpg";
import galleryImage6 from "../../assets/images/nfts/Bulut/2 fix.jpg";
import galleryImage7 from "../../assets/images/nfts/Çiçek/1.jpg";
import galleryImage8 from "../../assets/images/nfts/Çiçek/2.jpg";
import galleryImage9 from "../../assets/images/nfts/Güneş/1.jpg";
import galleryImage10 from "../../assets/images/nfts/Güneş/2.jpg";
import galleryImage11 from "../../assets/images/nfts/Kelebek/1 fix.jpg";
import galleryImage12 from "../../assets/images/nfts/Kelebek/2 fix.jpg";
import galleryImage13 from "../../assets/images/nfts/Kuş/1 fix.jpg";
import galleryImage14 from "../../assets/images/nfts/Kuş/2 fix.jpg";
import galleryImage15 from "../../assets/images/nfts/Kuş/3 fix.jpg";
import galleryImage16 from "../../assets/images/nfts/Yıldız/1.jpg";
import galleryImage17 from "../../assets/images/nfts/Yıldız/2.jpg";


SwiperCore.use([Autoplay]);

const GalleryHome = () => {
  const galleryOptions = {
    spaceBetween: 100,
    slidesPerView: 3,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      425: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      991: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1289: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1440: {
        spaceBetween: 20,
        slidesPerView: 4
      }
    }
  };
  return (
    <section className="gallery-home-one">
      <Container fluid>
        <Swiper {...galleryOptions}>
          <SwiperSlide>
            <GalleryCard image={galleryImage1} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage2} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage3} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage4} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage5} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage6} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage7} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage8} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage9} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage10} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage11} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage12} />
          </SwiperSlide>
          {/* <SwiperSlide>
            <GalleryCard image={galleryImage13} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage14} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage15} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage16} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage17} />
          </SwiperSlide> */}
          
        </Swiper>
      </Container>
    </section>
  );
};

export default GalleryHome;
