import { DownArrowIcon } from "components/global/DownArrowIcon";
import styled, { keyframes } from "styled-components";
import { TypingLetters } from "components/home/TypingLetters";
import { sourceCodePro } from "styles/Fonts";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const MainTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
`;
const TitleText = styled.h1`
  text-align: center;
  font-size: 64px;
  margin: 0;
  font-family: ${sourceCodePro};
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SubtitleText = styled.h2`
  margin: 0;
  font-size: 16px;
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 2s;
  animation-delay: 2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
`;

const ScrollArrow = styled.div`
  margin-top: 100px;
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 2s;
  animation-delay: 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

interface Props {}

const HomeSection: React.FC<Props> = () => {
  return (
    <HomeContainer>
      <MainTextContainer>
        <TitleText>
          <TypingLetters message="Griffin Staples" />
        </TitleText>
        <SubtitleText>Software Developer</SubtitleText>
      </MainTextContainer>
      <ScrollArrow>
        <DownArrowIcon size={24} />
      </ScrollArrow>
    </HomeContainer>
  );
};

export default HomeSection;
