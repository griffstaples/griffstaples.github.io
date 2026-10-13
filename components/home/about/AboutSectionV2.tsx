import styled from "styled-components";
import { sourceCodePro } from "styles/Fonts";
import { Colours } from "styles/Colours";
import { SectionLabel } from "components/global/SectionLabel";
import { TagList } from "components/global/TagList";
import { ResumeIcon } from "components/global/ResumeIcon";
import { GithubIcon } from "components/global/GithubIcon";
import { LinkedInIcon } from "components/global/LinkedInIcon";
import ButtonLink from "components/global/ButtonLink";

const TAG_NAMES = [
  "ROV & Vehicle Design",
  "Onshape CAD",
  "Arduino",
  "ESP32",
  "Reinforcement Learning",
  "Python",
  "C++",
  "TypeScript",
  "React",
  "NextJS",
  "Linux",
  "Google Cloud",
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
  margin: 0px;
  padding: 0 16px;
  max-width: 400px;
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
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${Colours.TextDim};
  margin: 0 0 16px 0;
`;

const DescriptionText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: ${Colours.TextMuted};
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
      <SectionLabel id="about-title">About</SectionLabel>
      <DescriptionAndSkillContainer>
        <DescriptionContainer>
          <DescriptionAndSkillsTitle>whoami</DescriptionAndSkillsTitle>
          <DescriptionText>
            I&apos;m an MASc candidate in Electrical and Computer Engineering
            at UBC&apos;s Marine Robotics Lab, where I design, build and
            field-deploy robotic systems — from an underwater ROV fielded
            with the Sc&apos;ianew First Nation to a bio-inspired surface
            vehicle.
            <br />
            <br />
            Before robotics, I spent nearly five years as a professional
            software developer across aerospace, FinTech and PropTech,
            including flight control software for a centrifuge on the ISS.
            <br />
            <br />
            I&apos;m a born and raised Vancouverite, and I&apos;m currently
            seeking hands-on robotics roles — open to field work.
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
          <IconButton href="GriffinStaples_Resume.pdf" target="_blank">
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
