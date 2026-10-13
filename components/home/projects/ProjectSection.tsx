import Link from "next/link";
import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";
import { PROJECTS } from "data/projects";

const ProjectsContainer = styled.div`
  padding: 0 16px 16px;
`;

const SectionLabel = styled.div`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${Colours.TextDim};
  margin-bottom: 18px;
`;

const TableScroll = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${Colours.TextDim};
  padding: 0 16px 12px 0;
  border-bottom: 1px solid ${Colours.GunMetalBlue};
`;

const Td = styled.td`
  padding: 16px 16px 16px 0;
  border-bottom: 1px solid ${Colours.GunMetalBlue};
  font-size: 14px;
  color: ${Colours.TextMuted};
  vertical-align: top;
`;

const ProjectName = styled(Td)`
  color: ${Colours.TextRegular};
  font-weight: 600;
  white-space: nowrap;
`;

const StackCell = styled(Td)`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 12px;
  color: ${Colours.NeonBlue};
  white-space: nowrap;
`;

const LinkCell = styled(Td)`
  text-align: right;
  white-space: nowrap;
`;

const ViewLink = styled(Link)`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 12px;
  color: ${Colours.TextDim};
  text-decoration: none;

  &:hover {
    color: ${Colours.NeonBlue};
  }
`;

const SeeAllRow = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;
`;

const SeeAllLink = styled(Link)`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 13px;
  color: ${Colours.TextMuted};
  text-decoration: none;

  &:hover {
    color: ${Colours.NeonBlue};
  }
`;

interface Props {}

const ProjectsSection: React.FC<Props> = () => {
  const featured = PROJECTS.filter((project) => project.featured);

  return (
    <ProjectsContainer>
      <SectionLabel id="project-title">Featured field work</SectionLabel>
      <TableScroll>
        <Table>
          <thead>
            <tr>
              <Th>Project</Th>
              <Th>Result</Th>
              <Th>Stack</Th>
              <Th aria-hidden />
            </tr>
          </thead>
          <tbody>
            {featured.map((project) => (
              <tr key={project.slug}>
                <ProjectName>{project.shortTitle ?? project.title}</ProjectName>
                <Td>{project.teaser}</Td>
                <StackCell>{project.stack.join(" · ")}</StackCell>
                <LinkCell>
                  <ViewLink href={`/projects/${project.slug}`}>view →</ViewLink>
                </LinkCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableScroll>
      <SeeAllRow>
        <SeeAllLink href="/projects">See all projects →</SeeAllLink>
      </SeeAllRow>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
