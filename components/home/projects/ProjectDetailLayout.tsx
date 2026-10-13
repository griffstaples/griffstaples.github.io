import Link from "next/link";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";
import { Breakpoints } from "styles/Breakpoints";
import { TagList } from "components/global/TagList";
import { MediaPlaceholder } from "components/global/MediaPlaceholder";
import Footer from "components/home/Footer";
import { MenuIcon, GithubIcon, LinkedInIcon } from "components/global/Attributions";
import type { Project } from "data/projects";

const Page = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${Colours.BackgroundColorDark},
    ${Colours.BackgroundColor}
  );
  color: ${Colours.TextRegular};
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Frame = styled.div`
  width: 100%;
  max-width: 760px;
  padding: 0 24px;
`;

const Nav = styled.div`
  padding: 24px 0 0;
`;

const BackLink = styled(Link)`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 12px;
  letter-spacing: 0.04em;
  color: ${Colours.TextMuted};
  text-decoration: none;

  &:hover {
    color: ${Colours.NeonBlue};
  }
`;

const Header = styled.div`
  padding: 40px 0 28px;
  border-bottom: 1px solid ${Colours.GunMetalBlue};
  margin-bottom: 32px;
`;

const StatusBadge = styled.div`
  display: inline-block;
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${Colours.NeonBlue};
  margin-bottom: 14px;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 1.2;
  margin: 0 0 10px;

  @media (min-width: ${Breakpoints.small}) {
    font-size: 38px;
  }
`;

const MetaLine = styled.div`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 13px;
  color: ${Colours.TextMuted};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 80px;

  @media (min-width: ${Breakpoints.medium}) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`;

const MediaColumn = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${Breakpoints.medium}) {
    flex: 0 0 auto;
  }
`;

const StyledImage = styled.img`
  border-radius: 8px;
  max-width: 100%;
  height: auto;
`;

const StyledVideo = styled.video`
  border-radius: 8px;
  max-width: 100%;
  height: auto;
`;

const DetailsColumn = styled.div`
  flex: 1;
  min-width: 0;
`;

const SectionLabel = styled.div`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${Colours.TextDim};
  margin-bottom: 14px;
`;

const SummaryList = styled.ul`
  margin: 0 0 32px;
  padding: 0 0 0 18px;
`;

const SummaryItem = styled.li`
  font-size: 15px;
  line-height: 1.65;
  color: ${Colours.TextMuted};
  margin-bottom: 10px;
`;

const StackTagList = styled(TagList)`
  margin-bottom: 32px;

  li {
    opacity: 0.7;
  }
`;

const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ExternalLink = styled.a`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 13px;
  color: ${Colours.TextRegular};
  text-decoration: none;
  border: 1px solid ${Colours.GunMetalBlue};
  border-radius: 4px;
  padding: 10px 16px;

  &:hover {
    border-color: ${Colours.NeonBlue};
    color: ${Colours.NeonBlue};
  }
`;

interface Props {
  project: Project;
}

export const ProjectDetailLayout: React.FC<Props> = ({ project }) => {
  return (
    <Page>
      <Frame>
        <Nav>
          <BackLink href="/projects">← All projects</BackLink>
        </Nav>
        <Header>
          <StatusBadge>{project.status}</StatusBadge>
          <Title>{project.title}</Title>
          <MetaLine>{project.metaLine}</MetaLine>
        </Header>
        <Body>
          <MediaColumn>
            {project.media.type === "placeholder" && (
              <MediaPlaceholder
                label={project.media.placeholderLabel ?? "Media coming soon"}
                width={project.media.width}
                height={project.media.height}
              />
            )}
            {project.media.type === "image" && (
              <StyledImage
                width={project.media.width}
                height={project.media.height}
                alt={project.media.alt}
                src={project.media.src}
              />
            )}
            {project.media.type === "video" && (
              <StyledVideo
                src={project.media.src}
                width={project.media.width}
                height={project.media.height}
                poster={project.media.poster}
                controls
              />
            )}
          </MediaColumn>
          <DetailsColumn>
            <SectionLabel>Summary</SectionLabel>
            <SummaryList>
              {project.summary.map((point) => (
                <SummaryItem key={point}>{point}</SummaryItem>
              ))}
            </SummaryList>
            <SectionLabel>Stack</SectionLabel>
            <StackTagList tags={project.stack} />
            {project.links.length > 0 && (
              <LinksRow>
                {project.links.map((link) => (
                  <ExternalLink
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                  >
                    {link.label}
                  </ExternalLink>
                ))}
              </LinksRow>
            )}
          </DetailsColumn>
        </Body>
        <Footer>
          <>
            <MenuIcon />
            <GithubIcon />
            <LinkedInIcon />
          </>
        </Footer>
      </Frame>
    </Page>
  );
};

export default ProjectDetailLayout;
