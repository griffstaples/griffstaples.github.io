import React from "react";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import Header from "components/home/Header";
import ProjectSection from "components/home/projects/ProjectSection";
import ContactSection from "components/home/ContactSection";
import HeroSection from "components/home/hero/HeroSection";
import ProofStrip from "components/home/hero/ProofStrip";
import Footer from "components/home/Footer";
import { Divider } from "components/global/Divider";
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
        <Divider />
        <AboutSectionV2 />
        <Divider />
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
