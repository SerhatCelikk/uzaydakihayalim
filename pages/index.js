import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import MainSlider from "../components/slider/main-slider";
import AboutCounter from "../components/about/about-counter";
import DonationOptions from "../components/donation-options";
import CallToActionTwo from "../components/call-to-action/call-to-action-two";
import GalleryTestimonials from "../components/gallery/gallery-testimonials";
import GalleryHome from "../components/gallery/gallery-home";
import TestimonialsTwo from "../components/testimonials/testimonials-two";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import TeamHome from "../components/team/team-home";
import CallToAction from "../components/call-to-action/call-to-action";
import useTranslation from "next-translate/useTranslation";

import TestimonialsOne from "../components/testimonials/testimonials-one";
import TestimonialsThree from "../components/testimonials/testimonials-three";
import VideoCardTwo from "../components/videos/video-card-two";
const HomeOne = () => {
  const { t, lang } = useTranslation();
  return (
    <Layout pageTitle={t("common:Hayalim Uzayda")}>
      <HeaderOne />
      <StickyHeader />
      <MainSlider />
       <VideoCardTwo /> 
      {/* <ServiceOne /> */}
      <AboutCounter />
      <br/>
      {/* <CausesHome /> */}
      <CallToActionTwo />

      <TestimonialsOne />
      <GalleryTestimonials>
        <GalleryHome />
        <TestimonialsTwo />
      </GalleryTestimonials>

      <DonationOptions />
      {/* <TestimonialsThree /> */}

      {/* <TeamHome /> */}

      {/* <BlogHome /> */}
      {/* <CallToAction /> */}
      {/* <GoogleMap extraClass="home" /> */}

      <BrandCarousel extraClass="client-carousel__has-top-shadow" />
      <Footer />
    </Layout>
  );
};

export default HomeOne;
