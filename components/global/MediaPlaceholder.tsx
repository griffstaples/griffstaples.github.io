import styled from "styled-components";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";

const PlaceholderBox = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  max-width: 100%;
  height: ${(props) => props.height}px;
  border-radius: 8px;
  border: 1px dashed ${Colours.GunMetalBlue};
  background-color: ${Colours.BackgroundColorDark};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
`;

const Label = styled.span`
  font-family: ${sourceCodePro.style.fontFamily};
  font-size: 11px;
  letter-spacing: 0.02em;
  color: ${Colours.TextDim};
  line-height: 1.6;
`;

interface Props {
  label: string;
  width: number;
  height: number;
  className?: string;
}

export const MediaPlaceholder: React.FC<Props> = ({
  label,
  width,
  height,
  className,
}) => {
  return (
    <PlaceholderBox width={width} height={height} className={className}>
      <Label>[ {label} ]</Label>
    </PlaceholderBox>
  );
};

export default MediaPlaceholder;
