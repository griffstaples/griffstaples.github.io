import styled from "styled-components";
import { sourceCodePro } from "styles/Fonts";
import { Colours } from "styles/Colours";
import { SectionTitle } from "components/home/SectionTitle";
import { TagList } from "components/global/TagList";
import { ResumeIcon } from "components/global/ResumeIcon";
import { GithubIcon } from "components/global/GithubIcon";
import { LinkedInIcon } from "components/global/LinkedInIcon";
import ButtonLink from "components/global/ButtonLink";

const TAG_NAMES = [
  "React",
  "Javascript",
  "Typescript",
  "NextJS",
  "StyledComponents",
  "HTML",
  "CSS",
  "Python",
  "Flask",
  "AWS Cognito",
  "DynamoDB",
  "Postgres",
];

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const DescriptionAndSkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  justify-content: center;
  align-items: center;
  margin: 32px 0px;
  padding: 0 32px;
  max-width: 400px;
  font-family: ${sourceCodePro.style.fontFamily};
  /* This media is based on content size so is therefore not saved as a variable */
  @media (min-width: 600px) {
    max-width: none;
    flex-direction: row;
    column-gap: 64px;
    justify-content: space-between;
    align-items: start;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
`;

const DescriptionAndSkillsTitle = styled.h2`
  font-size: 20px;
  margin: 0 0 24px 0;
`;

const DescriptionText = styled.p`
  margin: 0;
`;

const SkillsListContainer = styled.div``;

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const RelatedLinksContainer = styled.div`
  width: 100%;
`;

const RelatedLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 32px 48px;

  @media (min-width: 600px) {
    flex-direction: row;
    column-gap: 16px;
    padding: 32px 32px;
  }
`;

const IconButton = styled(ButtonLink)`
  padding: 8px 16px;
  width: 100%;

  // not 400px due to 16px horizontal padding
  max-width: 368px;

  /* border-radius: 4px; */
  .whiteIcon {
    display: block;
  }
  &:hover .whiteIcon {
    display: none;
    transition: ease-in 0.15s;
  }
  .blueIcon {
    display: none;
  }
  &:hover .blueIcon {
    display: block;
    transition: ease-in 0.15s;
  }
`;

const IconLinkContent = styled.div`
  display: flex;
  column-gap: 8px;
`;

interface Props {}

const AboutSectionV2: React.FC<Props> = () => {
  return (
    <AboutContainer>
      <SectionTitle id="about-title">About</SectionTitle>
      <DescriptionAndSkillContainer>
        <DescriptionContainer>
          <DescriptionAndSkillsTitle>whoami</DescriptionAndSkillsTitle>
          <DescriptionText>
            I&apos;m a born and raised Vancouverite living and working in the
            city.
            <br />
            <br />
            I have experience developing software in various industries
            including aerospace, FinTech and PropTech and am currently working
            as a freelance software developer specializing in web application
            development.
            <br />
            <br />
            Some of my major interests include AI, robotics and languages (the
            human kind).
          </DescriptionText>
        </DescriptionContainer>
        <SkillsContainer>
          <DescriptionAndSkillsTitle>skills</DescriptionAndSkillsTitle>
          <SkillsListContainer>
            <TagList tags={TAG_NAMES} />
          </SkillsListContainer>
        </SkillsContainer>
      </DescriptionAndSkillContainer>
      <RelatedLinksContainer>
        <RelatedLinks>
          <IconButton href="GriffinStaples_CV.pdf" target="_blank">
            <IconLinkContent>
              <ResumeIcon size={24} className="whiteIcon" />
              <ResumeIcon
                size={24}
                className="blueIcon"
                stroke={Colours.NeonBlue}
              />
              Resume
            </IconLinkContent>
          </IconButton>
          <IconButton
            isExternal
            href="https://github.com/griffstaples"
            target="_blank"
          >
            <IconLinkContent>
              <GithubIcon size={24} className="whiteIcon" />
              <GithubIcon
                size={24}
                className="blueIcon"
                stroke={Colours.NeonBlue}
              />
              Github
            </IconLinkContent>
          </IconButton>
          <IconButton
            isExternal
            href="https://www.linkedin.com/in/griffinstaples"
            target="_blank"
          >
            <IconLinkContent>
              <LinkedInIcon size={24} className="whiteIcon" />
              <LinkedInIcon
                size={24}
                className="blueIcon"
                stroke={Colours.NeonBlue}
              />
              LinkedIn
            </IconLinkContent>
          </IconButton>
        </RelatedLinks>
      </RelatedLinksContainer>
    </AboutContainer>
  );
};

export default AboutSectionV2;
