import ButtonLink from "components/global/ButtonLink";
import styled from "styled-components";
import { SectionTitle } from "components/home/SectionTitle";
import StandardProjectTile from "./StandardProjectTile";

const CryptoImageHeight = 207;
const BPMonitorHeight = 202;
const MonocopterHeight = 455;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

const ImageContainer = styled.div``;

const VideoContainer = styled.div``;

const StyledVideo = styled.video`
  border-radius: 8px;
`;

const StyledSeeMoreButton = styled(ButtonLink)`
  margin-bottom: 16px;
`;

interface Props {}

const ProjectsSection: React.FC<Props> = () => {
  return (
    <ProjectsContainer>
      <SectionTitle id="project-title">Projects</SectionTitle>
      <StandardProjectTile
        projectTitle="Embedding Dictionary"
        projectTitlePosition="left"
        projectDescription="Embedding Dictionary is a tool that allows you to explore the English language in embedding space, providing a fuzzy nearest neighbours search to determine related words."
        descriptionTextPosition="left"
        tagList={["NextJS", "Typescript", "Python", "FastAPI"]}
        contentHeight={240}
        callToActionLink="https://www.embeddingdictionary.com"
        callToActionText="Try it here."
      >
        <ImageContainer>
          <img
            style={{ borderRadius: 8 }}
            width={300}
            height={238}
            alt="An image showing an the nearest neighbours in an embedding space map"
            src="/projects/EmbeddingDictionaryGraph.jpg"
          />
        </ImageContainer>
      </StandardProjectTile>
      <StandardProjectTile
        projectTitle="Comment Explorer"
        projectTitlePosition="right"
        projectDescription="Comment Explorer is a web app for analyzing the Youtube comment section. It provides sentiment, emotional content and subject analysis and its ChatGPT integration allows you to query your comment section."
        descriptionTextPosition="right"
        tagList={["NextJS", "Typescript", "Python", "FastAPI", "ChatGPT"]}
        contentHeight={240}
        callToActionLink="https://www.commentexplorer.com"
        callToActionText="Check it out!"
      >
        <ImageContainer>
          <img
            style={{ borderRadius: 8 }}
            width={300}
            height={238}
            alt="An image of the Comment Explorer analysis"
            src="/projects/CommentExplorerDashboard.png"
          />
        </ImageContainer>
      </StandardProjectTile>
      <StandardProjectTile
        projectTitle="Crypto-Currency Trader"
        projectTitlePosition="left"
        projectDescription="This project takes advantage of Binance's API to trade crypto
        currency following an algorithm."
        descriptionTextPosition="left"
        tagList={["Python", "keras", "BinanceAPI"]}
        contentHeight={230}
        callToActionLink="https://github.com/griffstaples/CryptocurrencyTrader"
        callToActionText="Check out the repo."
      >
        <ImageContainer>
          <img
            width={256}
            height={CryptoImageHeight}
            alt="A schematic of the cryptocurrency trading software"
            src="/projects/CryptoDiagram.png"
          />
        </ImageContainer>
      </StandardProjectTile>
      <StandardProjectTile
        projectTitle="Blood Pressure Monitor"
        projectTitlePosition="right"
        projectDescription="For my 4th year undegraduate thesis I designed a blood pressure
        monitor which measured blood pressure using an optical signal as
        opposed to the traditional auscultatory method."
        descriptionTextPosition="right"
        tagList={["Python", "keras", "numpy"]}
        contentHeight={BPMonitorHeight}
        callToActionLink="https://github.com/griffstaples/EngPhysThesis"
        callToActionText="Check out the repo."
      >
        <ImageContainer>
          <img
            width={256}
            height={BPMonitorHeight}
            alt="A schematic of an optical blood pressure monitor"
            src="/projects/BP_Schematic.png"
          />
        </ImageContainer>
      </StandardProjectTile>
      <StandardProjectTile
        projectTitle="Monocopter"
        projectTitlePosition="left"
        projectDescription="Working as a research assistant at the Royal Military College in
        Kingston Ontario, I developed the avionics for a single-bladed
        helicopter (AKA monocopter)."
        descriptionTextPosition="left"
        tagList={["Arduino", "C/C++"]}
        contentHeight={MonocopterHeight}
      >
        <VideoContainer>
          <StyledVideo
            src="/projects/monocopter_testflight.mp4"
            width={256}
            height={MonocopterHeight}
            poster="/projects/monocopter_thumbnail.png"
            controls
          />
        </VideoContainer>
      </StandardProjectTile>
      <StyledSeeMoreButton href="/projects">See projects</StyledSeeMoreButton>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
