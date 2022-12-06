import styled from "styled-components";
import { Colours } from "styles/Colours";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

const TitleText = styled.h2`
  font-size: 24px;
  margin-top: 32px;
  padding: 0;
`;

const TitleUnderline = styled.div`
  width: 48px;
  height: 8px;
  background-color: ${Colours.TextRegular};
  margin-bottom: 32px;
`;

interface Props {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export const SectionTitle: React.FC<Props> = ({ id, className, children }) => {
  return (
    <TitleContainer id={id} className={className}>
      <TitleText>{children}</TitleText>
      <TitleUnderline />
    </TitleContainer>
  );
};
