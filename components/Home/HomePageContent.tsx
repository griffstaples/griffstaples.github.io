import React from "react";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import Header from "components/home/Header";
import AboutSection from "components/home/AboutSection";
import ProjectsSection from "components/home/ProjectsSection";
import ContactSection from "components/home/ContactSection";
import HomeSection from "components/home/HomeSection";
import Footer from "components/home/Footer";
import { SectionDivider as CustomSectionDivier } from "components/global/SectionDivider";

const PageWrapper = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${Colours.BackgroundColorDark},
    ${Colours.BackgroundColor}
  );
  color: ${Colours.TextRegular};
  display: flex;
  justify-content: center;
`;

const SectionDividerConfig = {
  width: 1000,
  height: 300,
  vLine: {
    width: 1,
    spacing: 45,
  },
  hLine: {
    width: 1,
    spacing: 45,
  },
};

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
        <CustomSectionDivier {...SectionDividerConfig} />
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
