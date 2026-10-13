import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";
import { Breakpoints } from "styles/Breakpoints";
import { useScrollToId } from "hooks/useScrollToId";
import { CausticsBackground } from "components/home/hero/CausticsBackground";

/**
 * Drop a real clip here (e.g. "/projects/hero-reel.mp4") once there's
 * field footage worth using — the hero will switch from the caustics
 * placeholder to the real <video> automatically. Keep it short, muted,
 * and loop-friendly (10–20s works well).
 */
const HERO_VIDEO_SRC: string | null = null;

const SPEC_ROWS: Array<{ label: string; value: string }> = [
  { label: "Role", value: "Robotics engineer" },
  { label: "Focus", value: "Marine & field systems, edge ML" },
  { label: "Based", value: "Vancouver, BC" },
  { label: "Lab", value: "UBC Marine Robotics" },
  { label: "Cert.", value: "ROC(M), PCOC, WFA" },
  { label: "Prior", value: "5 yrs software, incl. MDA / ISS" },
];

const HeroWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${Colours.GunMetalBlue};
  min-height: 420px;

  @media (min-width: ${Breakpoints.medium}) {
    min-height: 480px;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Scrim = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    rgba(16, 17, 17, 0.94) 0%,
    rgba(16, 17, 17, 0.86) 32%,
    rgba(16, 17, 17, 0.58) 62%,
    rgba(16, 17, 17, 0.38) 100%
  );
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 40px 24px 48px;

  @media (min-width: ${Breakpoints.medium}) {
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 44px;
    padding: 48px 40px 56px;
  }
`;

const Spec = styled.dl`
  margin: 0;
`;

const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  column-gap: 10px;
  padding: 9px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 12px;

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  }
`;

const SpecLabel = styled.dt`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const SpecValue = styled.dd`
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
`;

const Headline = styled.h1`
  font-size: 28px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0 0 16px;
  color: #fff;

  @media (min-width: ${Breakpoints.medium}) {
    font-size: 34px;
  }
`;

const Highlight = styled.span`
  color: ${Colours.NeonBlue};
`;

const Subtitle = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
  max-width: 52ch;
  margin: 0 0 26px;
`;

const CtaRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const CtaButtonBase = `
  font-size: 13px;
  letter-spacing: 0.03em;
  padding: 12px 20px;
  border-radius: 2px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

const PrimaryCta = styled.button`
  ${CtaButtonBase}
  font-family: ${sourceCodePro.style.fontFamily};
  background: ${Colours.NeonBlue};
  color: #06292d;
  font-weight: 700;
  cursor: pointer;
`;

const GhostCta = styled.a`
  ${CtaButtonBase}
  font-family: ${sourceCodePro.style.fontFamily};
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;

  &:hover {
    border-color: ${Colours.NeonBlue};
    color: ${Colours.NeonBlue};
  }
`;

export const HeroSection: React.FC = () => {
  const scrollToId = useScrollToId();

  return (
    <HeroWrapper>
      {HERO_VIDEO_SRC ? (
        <BackgroundVideo autoPlay muted loop playsInline src={HERO_VIDEO_SRC} />
      ) : (
        <CausticsBackground />
      )}
      <Scrim />
      <Content>
        <Spec>
          {SPEC_ROWS.map((row) => (
            <SpecRow key={row.label}>
              <SpecLabel>{row.label}</SpecLabel>
              <SpecValue>{row.value}</SpecValue>
            </SpecRow>
          ))}
        </Spec>
        <div>
          <Headline>
            Robots that have to work{" "}
            <Highlight>outside the lab, on the first try.</Highlight>
          </Headline>
          <Subtitle>
            I&apos;m an MASc candidate in Electrical and Computer Engineering
            at UBC, building and field-deploying underwater and surface
            vehicles. Before robotics: five years as a production software
            engineer.
          </Subtitle>
          <CtaRow>
            <PrimaryCta
              type="button"
              onClick={() => scrollToId("project-title")}
            >
              See the work →
            </PrimaryCta>
            <GhostCta href="/GriffinStaples_Resume.pdf" target="_blank">
              Résumé
            </GhostCta>
          </CtaRow>
        </div>
      </Content>
    </HeroWrapper>
  );
};

export default HeroSection;
