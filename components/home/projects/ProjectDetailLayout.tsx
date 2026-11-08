import Link from "next/link";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";
import { Breakpoints } from "styles/Breakpoints";
import { TagList } from "components/global/TagList";
import { MediaPlaceholder } from "components/global/MediaPlaceholder";
import Footer from "components/home/Footer";
import { MenuIcon, GithubIcon, LinkedInIcon } from "components/global/Attributions";
import { isTodo } from "data/projects";
import type { Project, ProjectMedia } from "data/projects";

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
  box-sizing: border-box;
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
`;

const StatusBadge = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${Colours.NeonBlue};
  margin-bottom: 14px;

  span + span {
    color: ${Colours.TextDim};
  }
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

const HeroMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
`;

const Overview = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: ${Colours.TextRegular};
  margin: 0 0 40px;
`;

const Block = styled.section`
  border-top: 1px solid ${Colours.GunMetalBlue};
  padding: 28px 0 8px;
`;

const Label = styled.div`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${Colours.TextDim};
  margin-bottom: 16px;
`;

const SectionHeading = styled.h2`
  font-size: 20px;
  line-height: 1.3;
  margin: 0 0 14px;
`;

const SpecTable = styled.dl`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 0 24px;

  @media (min-width: ${Breakpoints.small}) {
    grid-template-columns: 140px 1fr;
  }
`;

const SpecTerm = styled.dt`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 12px;
  color: ${Colours.TextDim};
  padding: 10px 0 0;

  @media (min-width: ${Breakpoints.small}) {
    padding: 10px 16px 10px 0;
    border-bottom: 1px solid ${Colours.GunMetalBlue}55;
  }
`;

const SpecValue = styled.dd<{ $todo: boolean }>`
  margin: 0;
  font-size: 14px;
  padding: 2px 0 10px;
  border-bottom: 1px solid ${Colours.GunMetalBlue}55;
  color: ${(props) => (props.$todo ? Colours.TodoAmber : Colours.TextRegular)};

  @media (min-width: ${Breakpoints.small}) {
    padding: 10px 0;
  }
`;

const Body = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${Colours.TextMuted};
  margin: 0 0 16px;
`;

const BulletList = styled.ul`
  margin: 0 0 20px;
  padding: 0 0 0 18px;
`;

const BulletItem = styled.li`
  font-size: 15px;
  line-height: 1.65;
  color: ${Colours.TextMuted};
  margin-bottom: 10px;
`;

const TodoNote = styled.div`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 12px;
  line-height: 1.6;
  color: ${Colours.TodoAmber};
  border: 1px dashed ${Colours.TodoAmber};
  border-radius: 4px;
  padding: 8px 12px;
  margin: 0 0 12px;
`;

const MediaGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin: 8px 0 24px;
`;

const Figure = styled.figure`
  margin: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Caption = styled.figcaption`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  color: ${Colours.TextDim};
  margin-top: 8px;
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

const DemonstratesList = styled.ul`
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
`;

const DemonstratesItem = styled.li`
  font-size: 15px;
  line-height: 1.6;
  color: ${Colours.TextRegular};
  padding: 8px 0 8px 22px;
  position: relative;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: ${Colours.NeonBlue};
    font-family: ${sourceCodePro.style.fontFamily};
  }
`;

const StackTagList = styled(TagList)`
  margin-bottom: 28px;

  li {
    opacity: 0.7;
  }
`;

const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
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

const PagerRow = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid ${Colours.GunMetalBlue};
  padding: 24px 0 64px;
`;

const PagerLink = styled(Link)<{ $align: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: ${(props) => props.$align};
  text-decoration: none;
  color: ${Colours.TextRegular};
  font-size: 14px;
  max-width: 48%;
  margin-left: ${(props) => (props.$align === "right" ? "auto" : "0")};

  span {
    font-family: ${sourceCodePro.style.fontFamily};
    font-size: 11px;
    color: ${Colours.TextDim};
  }

  &:hover {
    color: ${Colours.NeonBlue};
  }
`;

const MediaItem: React.FC<{ media: ProjectMedia }> = ({ media }) => (
  <Figure>
    {media.type === "placeholder" && (
      <MediaPlaceholder
        label={media.placeholderLabel ?? "Media coming soon"}
        width={media.width}
        height={media.height}
      />
    )}
    {media.type === "image" && (
      <StyledImage
        width={media.width}
        height={media.height}
        alt={media.alt}
        src={media.src}
      />
    )}
    {media.type === "video" && (
      <StyledVideo
        src={media.src}
        width={media.width}
        height={media.height}
        poster={media.poster}
        controls
      />
    )}
    {media.caption && <Caption>{media.caption}</Caption>}
  </Figure>
);

const Text: React.FC<{ text: string }> = ({ text }) =>
  isTodo(text) ? <TodoNote>{text}</TodoNote> : <Body>{text}</Body>;

interface Props {
  project: Project;
  previous?: Pick<Project, "slug" | "title">;
  next?: Pick<Project, "slug" | "title">;
}

export const ProjectDetailLayout: React.FC<Props> = ({ project, previous, next }) => {
  return (
    <Page>
      <Frame>
        <Nav>
          <BackLink href="/projects">← All projects</BackLink>
        </Nav>
        <Header>
          <StatusBadge>
            <span>{project.status}</span>
            {project.period && <span>{project.period}</span>}
          </StatusBadge>
          <Title>{project.title}</Title>
          <MetaLine>{project.metaLine}</MetaLine>
        </Header>

        <HeroMedia>
          <MediaItem media={project.media} />
        </HeroMedia>

        <Overview>{project.overview}</Overview>

        <Block>
          <Label>At a glance</Label>
          <SpecTable>
            {project.atAGlance.map((row) => (
              <div key={row.label} style={{ display: "contents" }}>
                <SpecTerm>{row.label}</SpecTerm>
                <SpecValue $todo={isTodo(row.value)}>{row.value}</SpecValue>
              </div>
            ))}
          </SpecTable>
        </Block>

        {project.sections.map((section) => {
          const bullets = section.bullets ?? [];
          const todos = bullets.filter(isTodo);
          const facts = bullets.filter((b) => !isTodo(b));
          return (
            <Block key={section.heading}>
              <SectionHeading>{section.heading}</SectionHeading>
              {section.body && <Text text={section.body} />}
              {facts.length > 0 && (
                <BulletList>
                  {facts.map((point) => (
                    <BulletItem key={point}>{point}</BulletItem>
                  ))}
                </BulletList>
              )}
              {todos.map((todo) => (
                <TodoNote key={todo}>{todo}</TodoNote>
              ))}
              {section.media && section.media.length > 0 && (
                <MediaGrid>
                  {section.media.map((media, i) => (
                    <MediaItem key={i} media={media} />
                  ))}
                </MediaGrid>
              )}
            </Block>
          );
        })}

        <Block>
          <Label>What this shows</Label>
          <DemonstratesList>
            {project.demonstrates.map((item) => (
              <DemonstratesItem key={item}>{item}</DemonstratesItem>
            ))}
          </DemonstratesList>
        </Block>

        <Block>
          <Label>Stack</Label>
          <StackTagList tags={project.stack} />
          {project.links.length > 0 && (
            <LinksRow>
              {project.links.map((link) => (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </ExternalLink>
              ))}
            </LinksRow>
          )}
        </Block>

        {(previous || next) && (
          <PagerRow aria-label="More projects">
            {previous && (
              <PagerLink href={`/projects/${previous.slug}`} $align="left">
                <span>← Previous</span>
                {previous.title}
              </PagerLink>
            )}
            {next && (
              <PagerLink href={`/projects/${next.slug}`} $align="right">
                <span>Next →</span>
                {next.title}
              </PagerLink>
            )}
          </PagerRow>
        )}

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
