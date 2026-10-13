import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";
import { Breakpoints } from "styles/Breakpoints";
import { PROJECTS } from "data/projects";
import Footer from "components/home/Footer";
import { MenuIcon, GithubIcon, LinkedInIcon } from "components/global/Attributions";

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

const Title = styled.h1`
  font-size: 30px;
  margin: 24px 0 40px;

  @media (min-width: ${Breakpoints.small}) {
    font-size: 36px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 20px 0;
  border-top: 1px solid ${Colours.GunMetalBlue};
  text-decoration: none;
  color: inherit;

  &:last-child {
    border-bottom: 1px solid ${Colours.GunMetalBlue};
  }

  &:hover h2 {
    color: ${Colours.NeonBlue};
  }
`;

const RowLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const RowTitle = styled.h2`
  font-size: 17px;
  margin: 0;
  color: ${Colours.TextRegular};
`;

const RowTeaser = styled.div`
  font-size: 13px;
  color: ${Colours.TextMuted};
  max-width: 50ch;
`;

const RowStatus = styled.div`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  color: ${Colours.TextDim};
  white-space: nowrap;
`;

export default function ProjectsIndex() {
  return (
    <>
      <Head>
        <title>Projects — Griffin Staples</title>
        <meta
          name="description"
          content="Field robotics, ML and software projects by Griffin Staples."
        />
        <link rel="icon" href="/website_favicon.svg" />
      </Head>
      <Page>
        <Frame>
          <BackLink href="/">← Home</BackLink>
          <Title>Projects</Title>
          <List>
            {PROJECTS.map((project) => (
              <Row key={project.slug} href={`/projects/${project.slug}`}>
                <RowLeft>
                  <RowTitle>{project.title}</RowTitle>
                  <RowTeaser>{project.teaser}</RowTeaser>
                </RowLeft>
                <RowStatus>{project.status}</RowStatus>
              </Row>
            ))}
          </List>
          <Footer>
            <>
              <MenuIcon />
              <GithubIcon />
              <LinkedInIcon />
            </>
          </Footer>
        </Frame>
      </Page>
    </>
  );
}
