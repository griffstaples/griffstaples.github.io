import ButtonLink from "components/global/ButtonLink";
import styled from "styled-components";
import { SectionTitle } from "components/home/SectionTitle";
import StandardProjectTile from "./StandardProjectTile";
import { MediaPlaceholder } from "components/global/MediaPlaceholder";
import { PROJECTS } from "data/projects";

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

const StyledImage = styled.img`
  border-radius: 8px;
`;

const StyledSeeMoreButton = styled(ButtonLink)`
  margin-bottom: 16px;
`;

// Content heights keep each tile's text column aligned with its media —
// tuned per project since descriptions run different lengths.
const CONTENT_HEIGHT_BY_SLUG: Record<string, number> = {
  "underwater-rov": 230,
  "bio-inspired-surface-vehicle": 230,
  monocopter: 280,
  "crypto-currency-trader": 207,
  "blood-pressure-monitor": 202,
  "comment-explorer": 240,
  "embedding-dictionary": 240,
};

interface Props {}

const ProjectsSection: React.FC<Props> = () => {
  return (
    <ProjectsContainer>
      <SectionTitle id="project-title">Featured field work</SectionTitle>
      {PROJECTS.map((project, index) => {
        const textPosition = index % 2 === 0 ? "left" : "right";
        return (
          <StandardProjectTile
            key={project.slug}
            projectTitle={project.title}
            projectTitlePosition={textPosition}
            projectDescription={project.teaser}
            descriptionTextPosition={textPosition}
            tagList={project.stack}
            contentHeight={CONTENT_HEIGHT_BY_SLUG[project.slug] ?? 220}
            callToActionLink={`/projects/${project.slug}`}
            callToActionText="View project →"
          >
            {project.media.type === "placeholder" && (
              <MediaPlaceholder
                label={project.media.placeholderLabel ?? "Media coming soon"}
                width={project.media.width}
                height={project.media.height}
              />
            )}
            {project.media.type === "image" && (
              <ImageContainer>
                <StyledImage
                  width={project.media.width}
                  height={project.media.height}
                  alt={project.media.alt}
                  src={project.media.src}
                />
              </ImageContainer>
            )}
            {project.media.type === "video" && (
              <VideoContainer>
                <StyledVideo
                  src={project.media.src}
                  width={project.media.width}
                  height={project.media.height}
                  poster={project.media.poster}
                  controls
                />
              </VideoContainer>
            )}
          </StandardProjectTile>
        );
      })}
      <StyledSeeMoreButton href="/projects">See projects</StyledSeeMoreButton>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
