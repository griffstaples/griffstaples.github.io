import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";

const TagsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  row-gap: 8px;
  padding: 0;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 16px;
  padding: 8px 8px;
  box-shadow: 0px 0px 5px 5px ${Colours.BackgroundColorDark};
  border-radius: 4px;
  font-family: ${sourceCodePro.style.fontFamily};
`;

interface Props {
  tags: Array<string>;
}

export const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </TagsContainer>
  );
};
