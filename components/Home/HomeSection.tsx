import styled from "styled-components";

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
`;

const SubtitleText = styled.h2`
  margin: 0;
  font-size: 16px;
`;

const ScrollArrow = styled.div`
  margin-top: 100px;
`;

interface Props {}

const HomeSection: React.FC<Props> = () => {
  return (
    <HomeContainer>
      <MainTextContainer>
        <TitleText>Griffin Staples</TitleText>
        <SubtitleText>Software Developer</SubtitleText>
      </MainTextContainer>
      <ScrollArrow>Scroll here</ScrollArrow>
    </HomeContainer>
  );
};

export default HomeSection;
