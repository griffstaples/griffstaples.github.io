import React from "react";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import Header from "components/home/Header";
import ProjectSection from "components/home/projects/ProjectSection";
import ContactSection from "components/home/ContactSection";
import HeroSection from "components/home/hero/HeroSection";
import ProofStrip from "components/home/hero/ProofStrip";
import Footer from "components/home/Footer";
import { SectionDivider } from "components/global/SectionDivider";
import {
  MenuIcon,
  ResumeIcon,
  GithubIcon,
  LinkedInIcon,
} from "components/global/Attributions";
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

const HeroWrapper = styled.div`
  padding: 8px 16px 0;
`;

const HomePageContent: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Header />
        <HeroWrapper>
          <HeroSection />
          <ProofStrip />
        </HeroWrapper>
        <ProjectSection />
        <SectionDivider {...SectionDividerConfig} />
        <AboutSectionV2 />
        <SectionDivider {...SectionDividerConfig} />
        <ContactSection />
        <Footer>
          <>
            <MenuIcon />
            <ResumeIcon />
            <GithubIcon />
            <LinkedInIcon />
          </>
        </Footer>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default HomePageContent;
