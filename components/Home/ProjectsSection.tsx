import styled from "styled-components";

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const TitleText = styled.h2`
  font-size: 24px;
`;

interface Props {}

const ProjectsSection: React.FC<Props> = () => {
  return (
    <ProjectsContainer>
      <TitleText>Projects</TitleText>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
