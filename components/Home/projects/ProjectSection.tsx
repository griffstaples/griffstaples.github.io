import SeeMoreButton from "components/global/SeeMoreButton";
import Image from "next/image";
import styled from "styled-components";
import { Breakpoints } from "styles/Breakpoints";
import { sourceCodePro } from "styles/Fonts";
import { SectionTitle } from "../SectionTitle";
import { ProjectTitle } from "./ProjectTitle";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

const ProjectContentContainer = styled.div<{ textPosition?: "left" | "right" }>`
  /* width: 100%; */
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 32px;
  margin-top: 32px;
  margin-bottom: 64px;
  @media (min-width: ${Breakpoints.small}) {
    flex-direction: ${(props) =>
      props.textPosition === "right" ? "row-reverse" : "row"};
    /* flex-direction: row; */
    column-gap: 32px;
    justify-content: start;
    align-items: start;
  }
`;

const ImageContainer = styled.div``;

const VideoContainer = styled.div`
  /* width: 100%;
  margin: 0 auto; */
`;

const StyledVideo = styled.video`
  border-radius: 8px;
`;

const DescriptionContainer = styled.div`
  /* display */
  font-family: ${sourceCodePro.style.fontFamily};
`;

const Description = styled.div``;

const StyledSeeMoreButton = styled(SeeMoreButton)`
  margin-bottom: 16px;
`;

interface Props {}

const ProjectsSection: React.FC<Props> = () => {
  return (
    <ProjectsContainer>
      <SectionTitle id="project-title">Projects</SectionTitle>
      <ProjectTitle textPosition="left">Crypto-Currency Trader</ProjectTitle>
      <ProjectContentContainer>
        <ImageContainer>
          <Image
            width={256}
            height={231}
            alt="Crypto Currency Trader Schematic"
            src="/projects/CryptoTraderSchematic_smaller.png"
          />
        </ImageContainer>
        <DescriptionContainer>
          This project takes advantage of Binance's API to trade crypto currency
          following an algorithm.
        </DescriptionContainer>
      </ProjectContentContainer>
      <ProjectTitle textPosition="right">Bloor Pressure Monitor</ProjectTitle>
      <ProjectContentContainer textPosition="right">
        <ImageContainer>
          <Image
            width={256}
            height={175}
            alt="Blood Pressure Monitor Schematic"
            src="/projects/bpschematic_smaller.png"
          />
        </ImageContainer>
        <DescriptionContainer>
          For my 4th year undegraduate thesis I designed a blood pressure
          monitor which measured blood pressure using an optical signal as
          opposed to the traditional auscultatory method.
        </DescriptionContainer>
      </ProjectContentContainer>
      <ProjectTitle textPosition="left">Monocopter</ProjectTitle>
      <ProjectContentContainer>
        <VideoContainer>
          <StyledVideo
            src="/projects/monocopter_testflight.mp4"
            width={256}
            controls
          />
        </VideoContainer>
        <DescriptionContainer>
          Working as a research assistant at the Royal Military College in
          Kingston Ontario, I developed the avionics for a single-bladed
          helicopter (AKA monocopter).
        </DescriptionContainer>
      </ProjectContentContainer>
      <StyledSeeMoreButton onClick={() => {}}>See more</StyledSeeMoreButton>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
