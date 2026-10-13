import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";

const Label = styled.div`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${Colours.TextDim};
  margin-bottom: 18px;
`;

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const SectionLabel: React.FC<Props> = ({ id, className, children }) => {
  return (
    <Label id={id} className={className}>
      {children}
    </Label>
  );
};

export default SectionLabel;
