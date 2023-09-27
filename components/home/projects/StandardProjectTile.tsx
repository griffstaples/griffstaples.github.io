import styled from "styled-components";
import { ProjectTitle } from "components/home/projects/ProjectTitle";
import { TagList } from "components/global/TagList";
import { Breakpoints } from "styles/Breakpoints";
import { sourceCodePro } from "styles/Fonts";
import Link from "next/link";
import { Colours } from "styles/Colours";

const ProjectTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
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
  max-width: 450px;
  width: 100%;
  @media (min-width: ${Breakpoints.medium}) {
    flex-direction: ${(props) =>
      props.textPosition === "right" ? "row-reverse" : "row"};
    column-gap: 32px;
    justify-content: start;
    align-items: center;

    max-width: none;
  }
`;

interface DescriptionTextProps {
  contentHeight: number;
}

const DescriptionAndTagsContainer = styled.div<DescriptionTextProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  row-gap: 42px;
  height: 100%;
  @media (min-width: ${Breakpoints.medium}) {
    justify-content: space-between;
    height: ${(props) => props.contentHeight.toString() + "px"};
  }
`;

const DescriptionContainer = styled.div<DescriptionTextProps>`
  font-family: ${sourceCodePro.style.fontFamily};
  height: 100%;
  @media (min-width: ${Breakpoints.medium}) {
    height: ${(props) => props.contentHeight.toString() + "px"};
  }
`;

const TagsContainer = styled.div``;

const StyledTagList = styled(TagList)`
  li {
    border: none;
    opacity: 0.5;
  }
`;

const StyledLink = styled(Link)`
  color: ${Colours.NeonBlue};
  text-decoration: none;
`;

interface StandardProjectTileProps {
  projectTitlePosition: "left" | "right";
  contentHeight: number;
  projectTitle: string;
  projectDescription: string;
  descriptionTextPosition: "left" | "right";
  tagList: string[];
  children: React.ReactNode;
  callToActionText?: string;
  callToActionLink?: string;
}

export default function StandardProjectTile({
  projectTitlePosition,
  projectTitle,
  projectDescription,
  descriptionTextPosition,
  tagList,
  children,
  contentHeight,
  callToActionText,
  callToActionLink,
}: StandardProjectTileProps) {
  return (
    <ProjectTileContainer>
      <ProjectTitle textPosition={projectTitlePosition}>
        {projectTitle}
      </ProjectTitle>
      <ProjectContentContainer textPosition={descriptionTextPosition}>
        {children}
        <DescriptionAndTagsContainer contentHeight={contentHeight}>
          <DescriptionContainer contentHeight={contentHeight}>
            {projectDescription}{" "}
            {callToActionLink && (
              <StyledLink href={callToActionLink} target="_blank">
                {callToActionText || "Check it out!"}
              </StyledLink>
            )}
          </DescriptionContainer>
          <TagsContainer>
            <StyledTagList tags={tagList} />
          </TagsContainer>
        </DescriptionAndTagsContainer>
      </ProjectContentContainer>
    </ProjectTileContainer>
  );
}
