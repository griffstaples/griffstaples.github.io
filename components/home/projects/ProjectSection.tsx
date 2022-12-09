import ButtonLink from "components/global/ButtonLink";
import { TagList } from "components/global/TagList";
import styled from "styled-components";
import { Breakpoints } from "styles/Breakpoints";
import { sourceCodePro } from "styles/Fonts";
import { SectionTitle } from "components/home/SectionTitle";
import { ProjectTitle } from "components/home/projects/ProjectTitle";

const CryptoImageHeight = 231;
const BPMonitorHeight = 175;
const MonocopterHeight = 455;

const StyledTagList = styled(TagList)`
  li {
    border: none;
    opacity: 0.5;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

const ProjectContentContainer = styled.div<{ textPosition?: "left" | "right" }>`
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
    align-items: center;
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

const DescriptionAndTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`;

const DescriptionContainer = styled.div`
  font-family: ${sourceCodePro.style.fontFamily};
`;

const TagsContainer = styled.div``;

const StyledSeeMoreButton = styled(ButtonLink)`
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
          <img
            width={256}
            height={CryptoImageHeight}
            alt="A schematic of cryptocurrency trading software"
            src="/projects/CryptoTraderSchematic_smaller.png"
          />
        </ImageContainer>
        <DescriptionAndTagsContainer style={{ height: CryptoImageHeight }}>
          <DescriptionContainer>
            This project takes advantage of Binance&apos;s API to trade crypto
            currency following an algorithm.
          </DescriptionContainer>
          <TagsContainer>
            <StyledTagList tags={["Python", "keras", "BinanceAPI"]} />
          </TagsContainer>
        </DescriptionAndTagsContainer>
      </ProjectContentContainer>
      <ProjectTitle textPosition="right">Bloor Pressure Monitor</ProjectTitle>
      <ProjectContentContainer textPosition="right">
        <ImageContainer>
          <img
            width={256}
            height={175}
            alt="A schematic of an optical blood pressure monitor"
            src="/projects/bpschematic_smaller.png"
          />
        </ImageContainer>
        <DescriptionAndTagsContainer style={{ height: BPMonitorHeight }}>
          <DescriptionContainer>
            For my 4th year undegraduate thesis I designed a blood pressure
            monitor which measured blood pressure using an optical signal as
            opposed to the traditional auscultatory method.
          </DescriptionContainer>
          <TagsContainer>
            <StyledTagList tags={["Python", "keras", "numpy"]} />
          </TagsContainer>
        </DescriptionAndTagsContainer>
      </ProjectContentContainer>
      <ProjectTitle textPosition="left">Monocopter</ProjectTitle>
      <ProjectContentContainer>
        <VideoContainer>
          <StyledVideo
            src="/projects/monocopter_testflight.mp4"
            width={256}
            height={MonocopterHeight}
            controls
          />
        </VideoContainer>
        <DescriptionAndTagsContainer style={{ height: MonocopterHeight }}>
          <DescriptionContainer>
            Working as a research assistant at the Royal Military College in
            Kingston Ontario, I developed the avionics for a single-bladed
            helicopter (AKA monocopter).
          </DescriptionContainer>
          <TagsContainer>
            <StyledTagList tags={["Arduino", "C/C++"]} />
          </TagsContainer>
        </DescriptionAndTagsContainer>
      </ProjectContentContainer>
      <StyledSeeMoreButton href="/projects">See projects</StyledSeeMoreButton>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
