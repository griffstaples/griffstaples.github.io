import React from "react";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import Header from "components/home/Header";
import AboutSection from "components/home/AboutSection";
import ProjectsSection from "components/home/ProjectsSection";
import ContactSection from "components/home/ContactSection";
import HomeSection from "components/home/HomeSection";
import Footer from "components/home/Footer";

const PageWrapper = styled.div`
  background-color: ${Colours.BackgroundColor};
  color: ${Colours.TextRegular};
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 800px;
`;

const SectionDivider = styled.div`
  height: 100px;
`;

const HomePageContent: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Header />
        <HomeSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <ContactSection />
        <Footer />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default HomePageContent;
