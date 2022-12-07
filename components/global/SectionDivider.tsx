import styled from "styled-components";
import { Colours } from "styles/Colours";

const SectionDividerContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CustomSVG = styled.svg`
  mask-image: linear-gradient(
    transparent,
    ${Colours.BackgroundColor},
    transparent
  );
  mask-mode: alpha;
`;

interface Props {
  width: number;
  height: number;
  vLine: {
    spacing: number;
    width: number;
  };
  hLine: {
    spacing: number;
    width: number;
  };
  stroke?: string;
}

export const SectionDivider: React.FC<Props> = ({
  width,
  height,
  vLine,
  hLine,
  stroke,
}) => {
  const vLines = [];
  const hLines = [];
  for (let i = vLine.spacing; i < width; i += vLine.spacing) {
    vLines.push(
      <line
        x1={i}
        x2={i}
        y1={0}
        y2={height}
        fill={stroke || "#FFF"}
        stroke={stroke || "#FFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={vLine.width}
        shapeRendering="crispEdges"
        preserveAspectRatio="none"
        key={`v-${i}`}
      />
    );
  }
  for (let i = hLine.spacing; i < height; i += hLine.spacing) {
    hLines.push(
      <line
        x1={0}
        x2={width}
        y1={i}
        y2={i}
        fill={stroke || "#FFF"}
        stroke={stroke || "#FFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={hLine.width}
        shapeRendering="crispEdges"
        key={`h-${i}`}
        // preserveAspectRatio="none"
      />
    );
  }
  return (
    <SectionDividerContainer>
      <CustomSVG
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        {vLines}
        {hLines}
      </CustomSVG>
    </SectionDividerContainer>
  );
};
