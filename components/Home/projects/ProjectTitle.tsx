import styled from "styled-components";
import { Colours } from "styles/Colours";

interface ContainerProps {
  textPosition: "left" | "right";
}

const ProjectTitleContainer = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.textPosition === "left" ? "row" : "row-reverse"};
  padding: 16px;
  align-items: center;
  justify-content: start;
`;

const LongLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Colours.TextRegular};
`;

const ShortLine = styled.div`
  width: 50px;
  height: 1px;
  background-color: ${Colours.TextRegular};
`;

const TitleText = styled.div`
  padding: 0 16px;
  white-space: nowrap;
  font-size: 20px;
  font-weight: bold;
`;

interface Props {
  textPosition: "left" | "right";
  children: string;
}

export const ProjectTitle: React.FC<Props> = ({ textPosition, children }) => {
  return (
    <ProjectTitleContainer textPosition={textPosition}>
      <ShortLine />
      <TitleText>{children}</TitleText>
      <LongLine />
    </ProjectTitleContainer>
  );
};
