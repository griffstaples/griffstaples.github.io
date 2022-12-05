import React from "react";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import Header from "components/home/Header";
import ProjectSection from "components/home/projects/ProjectSection";
import ContactSection from "components/home/ContactSection";
import HomeSection from "components/home/HomeSection";
import Footer from "components/home/Footer";
import { SectionDivider } from "components/global/SectionDivider";
import { MenuIcon, DownArrow } from "components/global/Attributions";
import AboutSectionV2 from "./about/AboutSectionV2";

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
  stroke: Colours.GunMetalBlue,
};

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`;

const HomePageContent: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Header />
        <HomeSection />
        <SectionDivider {...SectionDividerConfig} />
        <AboutSectionV2 />
        <SectionDivider {...SectionDividerConfig} />
        <ProjectSection />
        <SectionDivider {...SectionDividerConfig} />
        <ContactSection />
        <Footer>
          <>
            <MenuIcon />
            <DownArrow />
          </>
        </Footer>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default HomePageContent;
