import styled from "styled-components";
import Button from "components/global/SeeMoreButton";
import { sourceCodePro } from "styles/Fonts";
import { Colours } from "styles/Colours";
import { Breakpoints } from "styles/Breakpoints";
import { AboutImageCard } from "./AboutImageCard";
import { TagList } from "components/global/TagList";

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px auto;
`;

const ContentAndImageContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 32px;
  justify-content: center;
  align-items: center;
  margin: 32px 32px;
  max-width: 400px;
  /* This media is based on content size so is therefore not saved as a variable */
  @media (min-width: 600px) {
    max-width: none;
    flex-direction: row;
    column-gap: 32px;
    justify-content: space-between;
    align-items: start;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PersonalDescription = styled.div`
  font-family: ${sourceCodePro.style.fontFamily};
  box-shadow: 0px 0px 5px 5px ${Colours.BackgroundColorDark};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
`;

const ProfileImageCard = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0px 0px 5px 5px ${Colours.BackgroundColorDark};
  border-radius: 4px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

const TitleText = styled.h2`
  font-size: 24px;
  margin: 0;
  padding: 0;
`;

const TitleUnderline = styled.div`
  width: 48px;
  height: 8px;
  background-color: ${Colours.TextRegular};
  margin-bottom: 32px;
`;

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TitleContainer>
      <TitleText>{children}</TitleText>
      <TitleUnderline />
    </TitleContainer>
  );
};

const TagListContainer = styled.div`
  width: 100%;
  display: none;

  @media (min-width: ${Breakpoints.small}) {
    max-width: 420px;
    display: block;
  }
`;

interface Props {}

const AboutSection: React.FC<Props> = () => {
  return (
    <AboutContainer>
      <Title>About</Title>
      <ContentAndImageContainer>
        <AboutContent>
          <PersonalDescription>
            I'm a born and raised Vancouverite living and working in Toronto. I
            got my bachelor's of applied science at Queen's University (Sci' 19)
            majoring in engineering physics. I have experience developing
            software in various industries such as aerospace, FinTech and
            PropTech and am currently working as a freelance software developer
            specializing in web development. Some of my major interests include
            AI, robotics and languages (the human kind). In my free time I like
            to work on code projects and go camping.
          </PersonalDescription>
        </AboutContent>
        <ProfileImageCard>
          <AboutImageCard></AboutImageCard>
        </ProfileImageCard>
      </ContentAndImageContainer>
      <Button onClick={() => {}}>See more</Button>
    </AboutContainer>
  );
};

export default AboutSection;
