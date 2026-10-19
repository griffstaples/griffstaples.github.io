import Link from "next/link";
import styled from "styled-components";
import { sourceCodePro } from "styles/Fonts";
import { Colours } from "styles/Colours";
import { SectionLabel } from "components/global/SectionLabel";
import { TagList } from "components/global/TagList";

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

const RELATED_LINKS = [
  { name: "Résumé", href: "GriffinStaples_Resume.pdf", external: false },
  { name: "Github", href: "https://github.com/griffstaples", external: true },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/griffinstaples",
    external: true,
  },
];

const AboutContainer = styled.div`
  padding: 0 16px;
`;

const Banner = styled.div`
  aspect-ratio: 16 / 8;
  border-radius: 6px;
  border: 1px dashed ${Colours.GunMetalBlue};
  background-color: ${Colours.BackgroundColorDark};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  margin-bottom: 28px;
`;

const BannerLabel = styled.span`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 12px;
  color: ${Colours.TextDim};
  line-height: 1.6;
`;

const DescriptionText = styled.p`
  margin: 0 0 18px 0;
  font-size: 15.5px;
  line-height: 1.7;
  color: ${Colours.TextMuted};
  max-width: 62ch;

  &:last-child {
    margin-bottom: 0;
  }
`;

const MiniLabel = styled.h2`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${Colours.TextDim};
  margin: 28px 0 12px;
`;

const MutedTagList = styled(TagList)`
  li {
    border-color: ${Colours.GunMetalBlue};
    color: ${Colours.TextMuted};
  }
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

const LinkRow = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${Colours.GunMetalBlue};
  text-decoration: none;
  color: inherit;

  &:first-child {
    border-top: 1px solid ${Colours.GunMetalBlue};
  }

  &:hover .arrow {
    color: ${Colours.NeonBlue};
  }
`;

const LinkName = styled.span`
  font-size: 14px;
  color: ${Colours.TextRegular};
`;

const LinkArrow = styled.span.attrs({ className: "arrow" })`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 12px;
  color: ${Colours.TextDim};
`;

const AboutSectionV2: React.FC = () => {
  return (
    <AboutContainer>
      <SectionLabel id="about-title">About</SectionLabel>

      <Banner>
        <BannerLabel>
          [ Wide field photo — e.g. on the water, mid-deployment, not a
          studio headshot ]
        </BannerLabel>
      </Banner>

      <DescriptionText>
        I&apos;m an MASc candidate in Electrical and Computer Engineering at
        UBC&apos;s Marine Robotics Lab, where I design, build and
        field-deploy robotic systems — from an underwater ROV fielded with
        the Sc&apos;ianew First Nation to a bio-inspired surface vehicle.
      </DescriptionText>
      <DescriptionText>
        Before robotics, I spent nearly five years as a professional
        software developer across aerospace, FinTech and PropTech, including
        flight control software for a centrifuge on the ISS.
      </DescriptionText>
      <DescriptionText>
        I&apos;m a born and raised Vancouverite, and I&apos;m currently
        seeking hands-on robotics roles — open to field work.
      </DescriptionText>

      <MiniLabel>Skills</MiniLabel>
      <MutedTagList tags={TAG_NAMES} />

      <MiniLabel>Elsewhere</MiniLabel>
      <LinksColumn>
        {RELATED_LINKS.map((link) => (
          <LinkRow
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : "_self"}
          >
            <LinkName>{link.name}</LinkName>
            <LinkArrow>↗</LinkArrow>
          </LinkRow>
        ))}
      </LinksColumn>
    </AboutContainer>
  );
};

export default AboutSectionV2;
