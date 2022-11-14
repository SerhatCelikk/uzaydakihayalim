import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import AboutCounter from "../components/about/about-counter";
import Footer from "../components/footer";
import ContributeUs from "../components/contribute-us";
import useTranslation from "next-translate/useTranslation";


const About = () => {
  const { t, lang } = useTranslation();
  return (
    <Layout pageTitle={t("common:Hayalin mi var?")}>
      <HeaderOne />
      <PageHeader title={t("common:Nasıl Katılım Sağlayabilirim?")} crumbTitle="About" />
      <StickyHeader />
      <AboutCounter />

      {/* <TestimonialsOne /> */}
      {/* <BrandCarousel extraClass="client-carousel__has-border-top" /> */}

      <Footer />
    </Layout>
  );
};

export default About;
