import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { MainLayout } from "Styles/MainLayout";
import ImageSection from "Components/ImageSection";
import ServicesSection from "Components/ServicesSection";
import ReviewsSection from "Components/ReviewsSection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About me</title>
      </Helmet>
      <MainLayout>
        <AboutStyle>
          <ImageSection />
          {/* <ServicesSection />
          <ReviewsSection /> */}
        </AboutStyle>
      </MainLayout>
    </>
  );
};
const AboutStyle = styled.section``;
export default About;
