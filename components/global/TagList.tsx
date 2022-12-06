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
  margin: 0;
`;

const Tag = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 16px;
  padding: 8px 8px;
  border: 1px solid ${Colours.NeonBlue};
  border-radius: 4px;
  font-family: ${sourceCodePro.style.fontFamily};
`;

interface Props {
  tags: Array<string>;
  className?: string;
}

export const TagList: React.FC<Props> = ({ tags, className }) => {
  return (
    <TagsContainer className={className}>
      {tags.map((tag, i) => (
        <Tag key={i}>{tag}</Tag>
      ))}
    </TagsContainer>
  );
};
