import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";
import { Breakpoints } from "styles/Breakpoints";

const STATS: Array<{ value: string; label: string }> = [
  { value: "2", label: "Vehicles fielded since 2025" },
  { value: "91.3%", label: "Graduate average, UBC ECE" },
  { value: "$83,500", label: "Fellowships & research awards" },
  { value: "5 yrs", label: "Production software, incl. ISS" },
];

const Strip = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid ${Colours.GunMetalBlue};
  margin: 32px 0 54px;

  @media (min-width: ${Breakpoints.medium}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Cell = styled.div`
  padding: 20px 20px 20px 0;
  border-top: 1px solid ${Colours.GunMetalBlue};
`;

const Value = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 1;
  color: ${Colours.TextRegular};
  font-variant-numeric: tabular-nums;
`;

const Label = styled.div`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  color: ${Colours.TextDim};
  margin-top: 6px;
  letter-spacing: 0.02em;
`;

export const ProofStrip: React.FC = () => {
  return (
    <Strip>
      {STATS.map((stat) => (
        <Cell key={stat.label}>
          <Value>{stat.value}</Value>
          <Label>{stat.label}</Label>
        </Cell>
      ))}
    </Strip>
  );
};

export default ProofStrip;
